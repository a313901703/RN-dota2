import React, { Component } from 'react'
import { Text,View,TouchableWithoutFeedback} from 'react-native'
import { connect } from 'react-redux'

import { Flex} from '@ant-design/react-native'
import { getMatches } from "@api/player"
import { CircleThumb } from '../../components/Thumb'
import { NavigationActions } from '../../utils'
import Global from '../../global'

@connect()

class GameLists extends Component {
  constructor(props) {
    super(props)
    this.state = {
      lists: []
    }
  }

  componentDidMount(){
    // 获取比赛列表
    getMatches().then((res)=>{
      this.setState({
        lists:res
      })
    }).catch(()=>{
      this.setState({
        lists:[]
      })
    })
  }

  gotoDetail = (match) => {
    this.props.dispatch(NavigationActions.navigate({ 
      routeName: 'Detail' ,
      params : {
        match
      }
    }))
  }

  render() {
    const {lists} = this.state
    const Items = lists.map((v)=>{
      // 计算KDA
      let kda = v.deaths ? ((v.kills + v.assists) / v.deaths) : (v.kills + v.assists)
      kda = Math.round(kda * 100) / 100

      return (
        <TouchableWithoutFeedback onPress={()=>this.gotoDetail(v)} key={v.match_id}>
        <Flex justify="between" style={{borderBottomWidth:0.5,borderBottomColor:'#ddd',height:50,paddingHorizontal:5}} >
          <View >
            <Flex direction="row">  
              <CircleThumb uri={`${Global.PRO_IMAGE_HOSTS  }/heros/${ v.hero.hero_name  }.png`}/>
              <View style={{marginLeft:15}}>
                <Flex direction="column" align="start"> 
                  <Text style={styles.itemName}>{v.hero.cn_name || ''}</Text>
                  <Text style={styles.garyText}>
                    <Text style={v.is_win ? styles.winText : styles.failText}>{v.is_win ? '胜利' : "失败"}</Text>  {v.start}
                  </Text>
                </Flex>
              </View>
            </Flex>
          </View>
          <View style={{width:'25%'}}>
            <Flex direction="column" align="end">  
              <Text style={[styles.garyText,{marginBottom:3}]}>KDA : { kda}</Text>
              <Text style={styles.garyText}>{`${v.kills} / ${  v.deaths} / ${  v.assists}`}</Text>
            </Flex>
          </View>
        </Flex>
        </TouchableWithoutFeedback>
      )
    })
    return (
      <View >
        {Items}
      </View>
    )
  }
}

const styles = {
  itemText:{
    color:"#999"
  },
  itemName:{
    fontSize:14,
    marginBottom:3,
    fontWeight:'bold',
    textAlign:'left'
  },
  garyText:{
    color:"#444",
    fontSize:12
  },
  itemNameBox:{
    textAlign:'left',
  },
  winText:{
    color:"#00CC66"
  },
  failText:{
    color:"#FF0033"
  }
}

export default GameLists
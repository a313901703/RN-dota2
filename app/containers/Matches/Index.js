import React, { Component } from 'react'
import {StyleSheet ,View ,Text,Image,TouchableWithoutFeedback,Dimensions} from 'react-native'
import { getList } from "@api/leagues"
import { Grid, WingBlank , ListView, Flex } from '@ant-design/react-native'
import { NavigationActions } from '../../utils'
import SpaceBlank from "../../components/SpaceBlank"
import Global from '../../global'

const fullHeight = Dimensions.get('screen').height
const winHeight = Dimensions.get('window').height

const data = [
  {'text':"英雄",'icon': `${Global.PRO_IMAGE_HOSTS  }icon/heros.png`,'router':'Heroes'},  
  {'text':"物品",'icon': `${Global.PRO_IMAGE_HOSTS  }icon/wupin.png`,'router':'Items'},
  {'text':"天梯",'icon': `${Global.PRO_IMAGE_HOSTS  }icon/jiangbei.png`,'router':"Ladder"},
  {'text':"职业战队",'icon': `${Global.PRO_IMAGE_HOSTS  }icon/duiwu.png`,'router':'Teams'},
  {'text':"数据专题",'icon': `${Global.PRO_IMAGE_HOSTS  }icon/zhuanti.png`},
  {'text':"玩家",'icon': `${Global.PRO_IMAGE_HOSTS  }icon/member.png`},
  {'text':""},
  {'text':""},
]

export default class Matches extends Component {
  static navigationOptions = {
    tabBarLabel: '数据',
    headerTitle: "sourceData",
    tabBarIcon: ({ focused }) => 
       focused ? <Image style={styles.icon} source={require('../../images/icon/data_full.png')}/> : <Image style={styles.icon} source={require('../../images/icon/data.png')}/>
  }

  onPress = (el)=>{
    if (this.props.navigation && el && el.router) {
      const {dispatch} = this.props.navigation
      dispatch(NavigationActions.navigate({ routeName: el.router }))
    }
  }

  onFetch = async (
    page = 1,
    startFetch,
    abortFetch
  ) => {
    try {
      await this.sleep(20000)
      const pageLimit = 15
      let rowData = []
      try{
        const res = await getList(page,pageLimit)
        rowData = res.items || []
      }catch{
        console.log('request match error')
      }

      startFetch(rowData, pageLimit)
    } catch (err) {
      console.log('catch error',err)
      abortFetch() // manually stop the refresh or pagination if it encounters network error
    }
  };

  goGameSchedule = () => {
    console.log(this.props,'goGameSchedule')
    const dispatch = this.props.navigation ? this.props.navigation.dispatch : null
    if (dispatch) {
      dispatch(NavigationActions.navigate({ routeName: "GameSchedule" }))
    }
  }

  renderItem = (item) => (
    <WingBlank>
      <TouchableWithoutFeedback onPress={()=>this.goGameSchedule()}>
      <Flex align="start">
        <View style={{ padding: 10,paddingLeft:0}}>
          <Image
            style={styles.ThumbStyle}
            source={{uri: item.thumb}}
          />
        </View>
        <View style={{ padding: 10,height:'100%'}}>
          <View style={{flex:1}}>
            <Text style={styles.matchTitle}>{item.league_name}</Text>
          </View>
          <View style={{justifyContent:"center",flex:1}}>
            <Text style={{color:"#888",fontSize:12}}>
              {item.prize_poll}    {item.integral ? (`${item.integral  }积分`) : ''}
            </Text>
          </View>
          <View style={{justifyContent:"flex-end",flex:1}}>
            <Text style={{fontSize:12,color:"#888"}}>{item.start_time} ~ {item.end_time} </Text>  
          </View>
        </View>
      </Flex>
      </TouchableWithoutFeedback>
    </WingBlank>
  );

  renderHeaderView = () => (
    <View>
      <SpaceBlank title="游戏资料" />
      <Grid
        data={data}
        columnNum={4}
        hasLine={false}
        itemStyle={{ height: 70, backgroundColor: '#fff' }}
        onPress={(el,index) => this.onPress(el,index)}
      /> 
      <SpaceBlank title="联赛信息" />
    </View> 
  )

  render() {
    return (
      <ListView
        style={styles.container}
        showsVerticalScrollIndicator={false}
        // contentContainerStyle={{height:fullHeight - 300,backgroundColor:"#fff"}}
        onFetch={this.onFetch}
        keyExtractor={(item, index) =>
          `${item} - ${index}`
        }
        // header={this.renderHeaderView}
        renderItem={this.renderItem}
      />
    )
    return (
      <View style={styles.container}> 
        <ListView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{height:500}}
          onFetch={this.onFetch}
          keyExtractor={(item, index) =>
            `${item} - ${index}`
          }
          header={this.renderHeaderView}
          renderItem={this.renderItem}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor:"#fff",
    height:500
  },
  icon: {
    width: 23,
    height: 23,
  },
  renderHeader:{
    backgroundColor:"#efefef",
    paddingBottom:5,
  },
  renderItem:{
  },
  ThumbStyle:{
    width:100,
    height:70
  },
  matchTitle:{
    fontWeight:"bold",
    fontSize:14
  }
})
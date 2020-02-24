import React, { Component } from 'react'
import { StyleSheet,View, Text , Image ,ImageBackground ,Dimensions } from 'react-native'
import Accordion from 'react-native-collapsible/Accordion'
import { Flex} from '@ant-design/react-native'
import { Thumb } from '../../components/Thumb'
import Chart from "./Chart"
import Skeleton from "./Skeleton"

const fullWidth = Dimensions.get('window').width
const itemWidth = (fullWidth - 90) / 8

class Players extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeSections: [],
      activeSections2:[],
    }

    this.renderHeader = v => this.playerItem(v)

    this.renderContent = v => (
      <View style={styles.content}>
        <View style={styles.contentBox}>
          <View style={styles.contentItem}>
            <Text style={styles.contentItemText}>伤害：{v.hero_damage}</Text>
          </View>
          <View style={styles.contentItem} />
          <View style={styles.contentItem} />
        </View>
        <View style={styles.contentBox}>
          <View style={styles.contentItem}>
            <Text style={styles.contentItemText}>每分钟金钱：{v.gold_per_min}</Text>
          </View>
          <View style={styles.contentItem}>
            <Text style={styles.contentItemText}>建筑伤害：{v.tower_damage}</Text>
          </View>
          <View style={styles.contentItem}>
            <Text style={styles.contentItemText}>正补数：{v.last_hits}</Text>
          </View>
        </View>
        <View style={styles.contentBox}>
          <View style={styles.contentItem}>
            <Text style={styles.contentItemText}>每分钟经验：{v.xp_per_min}</Text>
          </View>
          <View style={styles.contentItem}>
            <Text style={styles.contentItemText}>治疗：{v.hero_healing}</Text>
          </View>
          <View style={styles.contentItem}>
            <Text style={styles.contentItemText}>反补：{v.denies}</Text>
          </View>
        </View>
        <View style={styles.abilityBox} >
          <Image source={{uri:"https://facebook.github.io/react-native/docs/assets/favicon.png"}} style={styles.abilityImg}/>
          <Image source={{uri:"https://facebook.github.io/react-native/docs/assets/favicon.png"}} style={styles.abilityImg}/>
          <Image source={{uri:"https://facebook.github.io/react-native/docs/assets/favicon.png"}} style={styles.abilityImg}/>
          <Image source={{uri:"https://facebook.github.io/react-native/docs/assets/favicon.png"}} style={styles.abilityImg}/>
          <Image source={{uri:"https://facebook.github.io/react-native/docs/assets/favicon.png"}} style={styles.abilityImg}/>
          <Image source={{uri:"https://facebook.github.io/react-native/docs/assets/favicon.png"}} style={styles.abilityImg}/>
          <Image source={{uri:"https://facebook.github.io/react-native/docs/assets/favicon.png"}} style={styles.abilityImg}/>
          <Image source={{uri:"https://facebook.github.io/react-native/docs/assets/favicon.png"}} style={styles.abilityImg}/>
          <Image source={{uri:"https://facebook.github.io/react-native/docs/assets/favicon.png"}} style={styles.abilityImg}/>
          <Image source={{uri:"https://facebook.github.io/react-native/docs/assets/favicon.png"}} style={styles.abilityImg}/>
          <Image source={{uri:"https://facebook.github.io/react-native/docs/assets/favicon.png"}} style={styles.abilityImg}/>
          <Image source={{uri:"https://facebook.github.io/react-native/docs/assets/favicon.png"}} style={styles.abilityImg}/>
          <Image source={{uri:"https://facebook.github.io/react-native/docs/assets/favicon.png"}} style={styles.abilityImg}/>
          <Image source={{uri:"https://facebook.github.io/react-native/docs/assets/favicon.png"}} style={styles.abilityImg}/>
        </View>
      </View>
    )

    this.updateSections = activeSections => {
      this.setState({ activeSections })
    }

    this.updateYySections = activeSections => {
      this.setState({ activeSections2:activeSections })
    }
  }

  playerItem = (v)=> {
    const {items} = v
    const items1 = items.slice(0,3)
    const items2 = items.slice(3,6)
    const imgs1 = items1.map((item)=> {
      const uri = (item && item.thumb) ? item.thumb : 'https://facebook.github.io/react-native/docs/assets/favicon.png'
      return <Image source={{uri}} style={styles.itemImg} resizeMode="stretch"/>
    })
    const imgs2 = items2.map((item)=> {
      const uri = (item && item.thumb) ? item.thumb : 'https://facebook.github.io/react-native/docs/assets/favicon.png'
      return <Image source={{uri}} style={styles.itemImg} resizeMode="stretch" />
    })
    return (
      <Flex justify="between" style={styles.playerItem} >
        <View >
          <Flex direction="row">  
            <Thumb uri={v.hero.thumb} currentStyle={{width:70}}/>
            <View style={{marginLeft:15}}>
              <Flex direction="column" align="start"> 
                <Text style={styles.itemName}>{v.hero.cn_name || ''}</Text>
                <Text style={styles.garyText}>参战率：76%   伤害: {v.hero_damage}</Text>
                <View style={{height:3}} />
                <Text style={styles.garyText}>KDA: {v.kda}   {`${v.kills  } / ${  v.deaths  } / ${  v.assists}`}</Text>
              </Flex>
            </View>
          </Flex>
        </View>
        <Flex direction="column" align="start" style={styles.itemRight}>
          <View style={styles.itemImgBox}>
          {imgs1}
          </View>
          <View style={styles.itemImgBox}>
          {imgs2}
          </View>
        </Flex>
      </Flex>
    )
  }

  render() {
    const {info,statistic} = this.props
    const players = (info && info.players ) ? info.players : []
    let thPlayers = []
    let yyPlayers = []
    if (players && players.length > 0) {
      thPlayers = players.slice(0,5)
      yyPlayers = players.slice(5,10)
    }
    if (!info) {
      return <View />
    }
    return (
      <View style={styles.container}>
        <ImageBackground source={require('../../images/Radiant.png')} style={styles.itemHeader} resizeMode="stretch">
          <Text style={styles.itemHeaderText}>天辉{info.radiant_win ? "胜利" : "失败"}</Text>
        </ImageBackground>
        {
          thPlayers.length <= 0 ? <Skeleton count={5} /> : 
          <Accordion
            sections={thPlayers}
            activeSections={this.state.activeSections}
            // renderSectionTitle={this.renderSectionTitle}
            renderHeader={this.renderHeader}
            renderContent={this.renderContent}
            onChange={this.updateSections}
          />
        }
        <ImageBackground source={require('../../images/Dire.png')} style={[styles.itemHeader,{marginTop:20}]} resizeMode="stretch">
          <Text style={styles.itemHeaderText}>夜魇{info.radiant_win ? "失败" : "胜利"}</Text>
        </ImageBackground>
        {
           yyPlayers.length <= 0 ? <Skeleton count={5} /> : 
           <Accordion
           sections={yyPlayers}
           activeSections={this.state.activeSections2}
           // renderSectionTitle={this.renderSectionTitle}
           renderHeader={this.renderHeader}
           renderContent={this.renderContent}
           onChange={this.updateYySections}
         />
        }
        <Chart statistic={statistic}/>
      </View>
    )}
}

const styles = StyleSheet.create({
  container:{
    marginVertical: 20,
  },
  itemHeader:{
    height:25,
    paddingTop:5,
    paddingLeft:5
  },
  itemHeaderText:{
    color:"#fff"
  },
  playerItem:{
    backgroundColor:'#fff',
    height:60,
    borderBottomWidth:0.5,
    paddingHorizontal:5,
    borderBottomColor:"#ddd"
  },
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
    fontSize:10
  },
  itemRight:{
    width:"30%"
  },
  itemImgBox:{
    flexDirection:"row",
  },
  itemImg:{
    flex:1,
    height:25,
    marginRight:3,
    marginBottom:3
  },
  content:{
    backgroundColor:"#fff",
  },
  contentBox:{
    flexDirection:"row",
    justifyContent:"space-between",
    paddingHorizontal:10,
    marginVertical:5,
  },
  contentItem:{
    flex:1
  },
  contentItemText:{
    color:"#444",
    fontSize:12
  },
  abilityBox:{
    paddingLeft:10,
    flexDirection:"row",
    justifyContent:"flex-start",
    flexWrap:"wrap",
  },
  abilityImg:{
    width:itemWidth,
    height:itemWidth,
    marginRight:10,
    marginBottom:8
  }
})
export default Players

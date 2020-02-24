import React, { Component } from 'react'
import { StyleSheet,View, Text } from 'react-native'
import NoData from "./NoData"
import {CircleThumb} from './Thumb'

export default class GameLists extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  gameItem = (v) => {
    const kda = v.deaths ? ((v.kills + v.assists) / v.deaths) : (v.kills + v.assists)
    return <View style={styles.tableBodyItem} key={v.match_id}>
      <View style={[styles.td,{width:60}]}><CircleThumb uri={v.hero.thumb} /></View>
      <View style={[styles.td,{width:35}]}>
        <View style={styles.winBox}>
          {
            v.is_win ? <View style={styles.winBox}><Text style={styles.winText}> 胜 </Text></View> : 
            <View style={styles.failBox}><Text style={styles.failText}> 负 </Text></View>
          }
        </View>
      </View>
      <View style={[styles.td,{flex:1}]}><Text> {v.game_mode} </Text></View>
      <View style={[styles.td,{width:70}]}>
        <View><Text> {v.start} </Text></View>
        {/* <View><Text style={styles.thText}> {v.game_mode} </Text></View> */}
      </View>
      <View style={[styles.td,{width:100}]}>
        <View><Text> {kda.toFixed(2)} </Text></View>
        <View><Text style={styles.thText}> {v.kills} / {v.deaths} / {v.assists} </Text></View>
      </View>
    </View>
  }

  render() {
    const games = this.props.games || []
    let dom = null
    if (games && games.length > 0) {
      dom = games.map((v)=>this.gameItem(v))
    }else{
      dom = <NoData />
    }
    return (
      <View style={styles.table}>
        <View style={styles.tableHeader}>
          <View style={[styles.td,{width:60}]}><Text style={styles.thText}> 英雄 </Text></View>
          <View style={[styles.td,{width:35}]}><Text style={styles.thText}> 结果 </Text></View>
          <View style={[styles.td,{flex:1}]}><Text style={styles.thText}> 比赛类型 </Text></View>
          <View style={[styles.td,{width:70}]}><Text style={styles.thText}> 结束时间 </Text></View>
          <View style={[styles.td,{width:100}]}><Text style={styles.thText}> KDA </Text></View>
        </View>
        <View>
          {dom}
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  table:{
    backgroundColor:"#fff"
  },
  tableHeader:{
    height:40,
    flexDirection:"row",
    borderBottomColor:"#666",
    borderBottomWidth:0.3,
  },
  thText:{
    fontSize:12,
    color:'#666'
  },
  td:{
    justifyContent:"center",
    alignItems:"center",
  },
  tableBodyItem:{
    height:50,
    flexDirection:"row",
    borderBottomColor:"#666",
    borderBottomWidth:0.3,
  },
  winBox:{
    width:23,
    height:23,
    backgroundColor:"#00BB33",
    justifyContent:"center",
    alignItems:"center",
  },
  winText:{
    color:"#fff"
  },
  failBox:{
    width:23,
    height:23,
    backgroundColor:"#FF0033",
    justifyContent:"center",
    alignItems:"center",
  },
  failText:{
    color:"#fff"
  }
})

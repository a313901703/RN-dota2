import React, { Component } from 'react'
import { StyleSheet,View, Text } from 'react-native'
import NoData from "./NoData"
import {CircleThumb} from './Thumb'

export default class GameHeroList extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  gameItem = (v) => <View style={styles.tableBodyItem} key={v.hero_id}>
  <View style={[styles.td,{width:50}]}><CircleThumb uri={v.hero.thumb} /></View>
  <View style={[styles.td,{width:70}]}>
    <Text> {(v.win ? (v.win * 100/ v.games) : 0).toFixed(2)}%</Text>
  </View>
  <View style={[styles.td,{flex:1}]}><Text> {v.games} </Text></View>
  <View style={[styles.td,{width:70}]}>
    <View><Text> 3300 </Text></View>
    <View><Text style={styles.thText}> 48% </Text></View>
  </View>
  <View style={[styles.td,{width:100}]}>
    <View><Text> 10 </Text></View>
    <View><Text style={styles.thText}> 10/0/0 </Text></View>
  </View>
</View>

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
          <View style={[styles.td,{width:50}]}><Text style={styles.thText}> 英雄 </Text></View>
          <View style={[styles.td,{width:70}]}><Text style={styles.thText}> 胜率 </Text></View>
          <View style={[styles.td,{flex:1}]}><Text style={styles.thText}> 场次 </Text></View>
          <View style={[styles.td,{width:70}]}><Text style={styles.thText}> 排名 </Text></View>
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

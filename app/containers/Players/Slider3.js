import React, { Component } from 'react'
import { StyleSheet,View, Text } from 'react-native'
import SpaceBlank from "../../components/SpaceBlank"
import EmptyData from '../../components/EmptyData'
import {CircleThumb} from '../../components/Thumb'

export default class Slider3 extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  tableDataItem = (v)=><View style={styles.tableBodyItem}>
  <View style={[styles.td,{width:70}]}><CircleThumb uri={v.hero.thumb} /></View>
  <View style={[styles.td,{flex:1}]}>
    <Text > {v.label} </Text>
  </View>
  <View style={[styles.td,{flex:1}]}><Text> {v.value} </Text></View>
  <View style={[styles.td,{flex:1}]}>
    <Text> {v.match_start_time} </Text>
  </View>
  {/* <View style={[styles.td,{flex:1}]}>
    <View style={styles.winBox}><Text style={{color:"#fff"}}> 胜 </Text></View>
  </View> */}
</View>

  render() {
    const {records} = this.props
    if (!records) {
      return <EmptyData />
    }
    const dom = Object.values(records).map((v) => {
      if (v.attribute === 'longest_winning_streak' || v.attribute === 'longest_losing_streak') {
        return <View />
      }
      return <View key={v.label}>{this.tableDataItem(v)}</View>
    })

    const {longest_winning_streak,longest_losing_streak} = records
    return (
      <View style={styles.slider}>
        <SpaceBlank title="连胜纪录" />
        <View style={styles.flexRow}>
          <View style={[styles.RowItem]}>
            <Text style={styles.winText}>{longest_winning_streak.value || 0}</Text>
            <Text style={styles.itemDescText}>最高连胜</Text>
          </View>
          <View style={styles.goldBorderRight}>
            <View style={{backgroundColor:"#aaa",width:0.5,height:50}}/>
          </View>
          <View style={[styles.RowItem]}>
            <Text style={styles.failText}>{longest_losing_streak.value || 0}</Text>
            <Text style={styles.itemDescText}>最高连败</Text>
          </View>
        </View>
        <SpaceBlank title="最高纪录" />
        <View style={styles.table}>
          <View style={styles.tableHeader}>
            <View style={[styles.td,{width:70}]}><Text style={styles.thText}> 英雄 </Text></View>
            <View style={[styles.td,{flex:1}]}><Text style={styles.thText}> 纪录 </Text></View>
            <View style={[styles.td,{flex:1}]}><Text style={styles.thText}> 数据 </Text></View>
            <View style={[styles.td,{flex:1}]}><Text style={styles.thText}> 时间 </Text></View>
            {/* <View style={[styles.td,{flex:1}]}><Text style={styles.thText}> 胜负 </Text></View> */}
          </View>
          {dom}
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  slider:{
    backgroundColor:"#fff"
  },
  flexRow:{
    flexDirection:"row",
  },
  RowItem:{
    flex:1,
    height:70,
    justifyContent:'center',
    alignItems:"center"
  },
  goldBorderRight:{
    height:70,
    paddingVertical:10
  },
  winText:{
    fontSize:20,
    color:'#00BB33'
  },
  failText:{
    fontSize:20,
    color:'#FF0033'
  },
  itemDescText:{
    fontSize:13,
    color:"#666"
  },

  // 表格
  table:{
    backgroundColor:"#fff"
  },
  tableHeader:{
    height:40,
    flexDirection:"row",
    borderBottomWidth:0.5,
    borderBottomColor:"#666",
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
  failBox:{
    width:23,
    height:23,
    backgroundColor:"#FF0033",
    justifyContent:"center",
    alignItems:"center",
  },
})

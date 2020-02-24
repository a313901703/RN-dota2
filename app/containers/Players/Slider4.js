import React, { Component } from 'react'
import { StyleSheet,View, Text } from 'react-native'
import { Progress } from '@ant-design/react-native'
import SpaceBlank from "../../components/SpaceBlank"
import EmptyData from '../../components/EmptyData'
import {CircleThumb} from '../../components/Thumb'

export default class Slider4 extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  tableDataItem = (v)=><View style={styles.tableBodyItem}>
  <View style={[styles.td,styles.userTd]}>
    <CircleThumb uri={v.teammate.avatarmedium} currentStyle={{marginRight:10}}/>
    <Text>{v.teammate.personaname}</Text>
  </View>
  <View style={[styles.td,{width:"50%",paddingTop:10}]}>
    <Text>{`${(v.win_rate * 100).toFixed(2)  }%`}</Text>
    {/* <View style={{marginBottom:5}}></View> */}
    {/* <Progress percent={58} unfilled  style={{width:"100%",backgroundColor:"rgba(255,255,255,0)",height:15}} barStyle={{borderColor:"#aaa"}}/> */}
  </View>
  <View style={[styles.td,{flex:1}]}><Text> {v.matches_count} </Text></View>
</View>

  render() {
    const {combine} = this.props
    if (!combine || combine.length < 0) {
      return <EmptyData />
    }
    const dom = combine.map((v) => <View key={v.teammate_player_id}>{this.tableDataItem(v)}</View>)
    return (
      <View style={styles.slider}>
        <SpaceBlank title="队友统计" />
        <View style={styles.table}>
          <View style={styles.tableHeader}>
            <View style={[styles.td,{width:"35%"}]}><Text style={styles.thText}> 玩家 </Text></View>
            <View style={[styles.td,{width:"50%"}]}><Text style={styles.thText}> 胜率 </Text></View>
            <View style={[styles.td,{flex:1}]}><Text style={styles.thText}> 场次 </Text></View>
          </View>
          {dom}
        </View>
        <SpaceBlank title="对手统计" />
        <View style={styles.table}>
          <View style={styles.tableHeader}>
            <View style={[styles.td,{width:"35%"}]}><Text style={styles.thText}> 玩家 </Text></View>
            <View style={[styles.td,{width:"50%"}]}><Text style={styles.thText}> 胜率 </Text></View>
            <View style={[styles.td,{flex:1}]}><Text style={styles.thText}> 场次 </Text></View>
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
  userTd:{
    width:"35%",
    flexDirection:"row",
    justifyContent:"flex-start",
    paddingLeft:10
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

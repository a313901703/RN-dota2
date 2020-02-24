import React, { Component } from 'react'
import { StyleSheet,View, Text,Dimensions,Image } from 'react-native'
import { Progress } from '@ant-design/react-native'
import SpaceBlank from "../../components/SpaceBlank"

const fullWidth = Dimensions.get('window').width

const TableItems = (props) => (
    <View style={styles.tbody}>
      <View style={[styles.headerItem,{flex:2}]}>
        <View style={{flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
          <Image source={require('../../images/items/item_abyssal_blade_lg.png')} style={styles.itemImg}/>
          <Text>  深渊之刃</Text>
        </View>
      </View>
      <View style={[styles.headerItem,{flex:2,paddingTop:7}]}>
        <Text>100w</Text>
        <Progress percent={100} unfilled="normal"  style={{width:"100%",backgroundColor:"rgba(255,255,255,0)",height:15}} barStyle={{borderColor:"#aaa"}}/>
      </View>
      <View style={[styles.headerItem,{alignItems:"flex-end",paddingRight:15}]}><Text style={{color:"#555"}}>65.2%</Text></View>
    </View>
  )

export default class Slider3 extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }
  
  render() {
    const a = [0,1,2,3,4,5,6,7,8,9]
    const Dom = a.map((v)=><TableItems key={v}/>)
    return (
      <View style={styles.continer}>
        <SpaceBlank title="本月数据"/>
        <View style={styles.table}>
          <View style={styles.theader}>
            <View style={[styles.headerItem,{flex:2}]}><Text style={{color:"#888"}}>物品</Text></View>
            <View style={[styles.headerItem,{flex:2}]}><Text style={{color:"#888"}}>场次</Text></View>
            <View style={[styles.headerItem,{alignItems:"flex-end",paddingRight:15}]}><Text style={{color:"#888"}}>胜率</Text></View>
          </View>
          <View >
            {Dom}
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  continer:{
    width:fullWidth,
    backgroundColor:"#fff",
  },
  theader:{
    flexDirection:"row",
  },
  tbody:{
    flexDirection:"row",
  },
  headerItem:{
    justifyContent: 'center',
    alignItems:"center",
    flex:1,
    height:40,
    borderBottomColor:"#ccc",
    borderBottomWidth:0.5,
  },
  bodyItem:{
    justifyContent: 'center',
    alignItems:"center",
    flex:1,
    height:40,
  },
  itemImg:{
    width:50,
    height:25
  }
})
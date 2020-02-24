import React, { Component } from 'react';
import { StyleSheet,View, Text,Dimensions,Image } from 'react-native';
import SpaceBlank from "../../components/SpaceBlank"
import { Progress,SegmentedControl } from '@ant-design/react-native';

const fullWidth = Dimensions.get('window').width

const TableItems = (props) => {
  return (
    <View style={styles.tbody}>
      <View style={[styles.headerItem,{flex:2}]}>
        <View style={{flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
          <Image source={require('../../images/heros/npc_dota_hero_abaddon.png')} style={styles.itemImg}/>
          <Text>  亚巴顿</Text>
        </View>
      </View>
      <View style={[styles.headerItem,{flex:2,paddingTop:7}]}>
        <Text>100w</Text>
        <Progress percent={100} unfilled="normal"  style={{width:"100%",backgroundColor:"rgba(255,255,255,0)",height:15}} barStyle={{borderColor:"#006633"}}/>
      </View>
      <View style={[styles.headerItem,{alignItems:"flex-end",paddingRight:15}]}><Text style={{color:"#555"}}>65.2%</Text></View>
    </View>
  )
}

const AggTableItems = (props) => {
  return (
    <View style={styles.tbody}>
      <View style={[styles.headerItem,{flex:2}]}>
        <View style={{flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
          <Image source={require('../../images/heros/npc_dota_hero_axe.png')} style={styles.itemImg}/>
          <Text>  斧王</Text>
        </View>
      </View>
      <View style={[styles.headerItem,{flex:2,paddingTop:7}]}>
        <Text>100w</Text>
        <Progress percent={100} unfilled="normal"  style={{width:"100%",backgroundColor:"rgba(255,255,255,0)",height:15}} barStyle={{borderColor:"#006633"}}/>
      </View>
      <View style={[styles.headerItem,{alignItems:"flex-end",paddingRight:15}]}><Text style={{color:"#555"}}>65.2%</Text></View>
    </View>
  )
}

export default class Slider4 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      segSelectedIndex:0
    };
  }

  handleSegChange(e){
    this.setState({
      segSelectedIndex:e.nativeEvent.selectedSegmentIndex
    })
  }

  render() {
    const {segSelectedIndex} = this.state
    const a = [0,1,2,3,4,5,6,7,8,9]
    const Dom = a.map((v)=>{
      return <TableItems key={v}/>
    })

    const aggDom = a.map((v)=>{
      return <AggTableItems key={v}/>
    })
    return (
      <View style={styles.continer}>
        <View style={styles.segmentedControlBox}>
          <SegmentedControl values={['队友', '对手']} onChange={(e)=>this.handleSegChange(e)} selectedIndex={segSelectedIndex}/>
        </View>
        <SpaceBlank title="本月数据"/>
        {
          segSelectedIndex === 0 ? <View style={styles.table}>
            <View style={styles.theader}>
              <View style={[styles.headerItem,{flex:2}]}><Text style={{color:"#888"}}>英雄</Text></View>
              <View style={[styles.headerItem,{flex:2}]}><Text style={{color:"#888"}}>场次</Text></View>
              <View style={[styles.headerItem,{alignItems:"flex-end",paddingRight:15}]}><Text style={{color:"#888"}}>胜率</Text></View>
            </View>
            <View >
              {Dom}
            </View>
          </View> : <View />
        }
        
        {
          segSelectedIndex === 1 ? <View style={styles.table}>
            <View style={styles.theader}>
              <View style={[styles.headerItem,{flex:2}]}><Text style={{color:"#888"}}>英雄</Text></View>
              <View style={[styles.headerItem,{flex:2}]}><Text style={{color:"#888"}}>场次</Text></View>
              <View style={[styles.headerItem,{alignItems:"flex-end",paddingRight:15}]}><Text style={{color:"#888"}}>胜率</Text></View>
            </View>
            <View >
              {aggDom}
            </View>
          </View> : <View />
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  continer:{
    width:fullWidth,
    backgroundColor:"#fff",
  },
  segmentedControlBox:{
    padding:10,
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
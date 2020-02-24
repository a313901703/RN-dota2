import React, { Component } from 'react'
import { StyleSheet,View, Text,Image } from 'react-native'
import SpaceBlank from "../../components/SpaceBlank"

export default class GameSchedule extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  renderScheduleItem = (v) => <View style={styles.schedule} key={v}>
    <View style={[styles.scheduleItem,{flex:1}]}><Text style={styles.garyText}>16：30</Text></View>
    <View style={[styles.scheduleItem,{flex:1,flexDirection:"row"}]}>
      <View><Text>OG  </Text></View>
      <Image source={require('../../images/gq_mg.png')} style={{width:30,height:30}}/>
    </View>
    <View style={[styles.scheduleItem,{flex:1}]}>
      <Text>
        <Text style={styles.winText}>2 </Text>
        <Text>:</Text>
        <Text> 0</Text>
      </Text>
    </View>
    <View style={[styles.scheduleItem,{flex:1,flexDirection:"row"}]}>
      <View><Text>VG  </Text></View>
      <Image source={require('../../images/gq_zg.png')} style={{width:30,height:30}}/>
    </View>
  </View>

  render() {
    const scheduleItems = [1,2,3].map((v)=>this.renderScheduleItem(v))
    return (
      <View style={styles.container}>
        <SpaceBlank title="2019-12-12" />
        {scheduleItems}
        <SpaceBlank title="2019-12-11" />
        {scheduleItems}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:"#fff",
    flex:1
  },
  schedule:{
    flexDirection:"row",
  },
  scheduleItem:{
    height:40,
    justifyContent: 'center',
    alignItems:'center',
    borderWidth:0,
    borderBottomColor:"#666",
    borderBottomWidth:0.5
  },
  garyText:{
    color:"#666"
  },
  winText:{
    color:"#00BB33"
  }
})

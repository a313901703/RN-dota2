import React, { Component } from 'react'
import { StyleSheet,View, Text ,Image } from 'react-native'
import SpaceBlank from "../../components/SpaceBlank"

export default class Slider2 extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <View style={styles.slider2}>
        <SpaceBlank title="奖章" />
        <View style={styles.gold}>
          <View style={[styles.goldItem]}>
            <Image style={styles.glodImg} source={require('../../images/cfrs.png')} />
          </View>
          <View style={styles.goldBorderRight}>
            <View style={{backgroundColor:"#aaa",width:0.5,height:50}}/>
          </View>
          <View style={styles.goldItem}>
            <Text>49.3%</Text>
            <Text style={{fontSize:13,color:"#666"}}>排名</Text>
          </View>
        </View>
        <SpaceBlank title="趋势" />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  slider2:{
    backgroundColor:"#fff"
  },
  gold:{
    flexDirection:"row",
  },
  goldItem:{
    flex:1,
    height:70,
    justifyContent:'center',
    alignItems:"center"
  },
  goldBorderRight:{
    height:70,
    paddingVertical:10
  },
  glodImg:{
    width:50,height:50
  }
})

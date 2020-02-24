import React, { Component } from 'react';
import { StyleSheet,View, Text,Dimensions,Image } from 'react-native';
import SpaceBlank from "../../components/SpaceBlank"

const fullWidth = Dimensions.get('window').width

const AblititiesItem = (props) => {
  return (
    <View style={styles.ablitities}>
      <View style={styles.winRate}>
        <Text style={styles.textBlod}>0.75%</Text>
        <View style={{height:5}}/>
        <Text>使用率</Text>
        <View style={{height:5}}/>
        <Text style={styles.textBlod}>54.2%</Text>
        <View style={{height:5}}/>
        <Text>胜率</Text>
      </View>
      <View style={styles.ablitityDetial}>
        <View><Image source={require('../../images/timg.jpeg')} style={styles.abilityImg} /></View>
        <View><Image source={require('../../images/timg.jpeg')} style={styles.abilityImg} /></View>
        <View><Image source={require('../../images/timg.jpeg')} style={styles.abilityImg} /></View>
        <View><Image source={require('../../images/timg.jpeg')} style={styles.abilityImg} /></View>
        <View><Image source={require('../../images/timg.jpeg')} style={styles.abilityImg} /></View>
        <View><Image source={require('../../images/timg.jpeg')} style={styles.abilityImg} /></View>
        <View><Image source={require('../../images/timg.jpeg')} style={styles.abilityImg} /></View>
        <View><Image source={require('../../images/timg.jpeg')} style={styles.abilityImg} /></View>
        <View><Image source={require('../../images/timg.jpeg')} style={styles.abilityImg} /></View>
        <View><Image source={require('../../images/timg.jpeg')} style={styles.abilityImg} /></View>
        <View><Image source={require('../../images/timg.jpeg')} style={styles.abilityImg} /></View>
        <View><Image source={require('../../images/timg.jpeg')} style={styles.abilityImg} /></View>
        <View><Image source={require('../../images/timg.jpeg')} style={styles.abilityImg} /></View>
        <View><Image source={require('../../images/timg.jpeg')} style={styles.abilityImg} /></View>
        <View><Image source={require('../../images/timg.jpeg')} style={styles.abilityImg} /></View>
        <View><Image source={require('../../images/timg.jpeg')} style={styles.abilityImg} /></View>
        <View><Image source={require('../../images/timg.jpeg')} style={styles.abilityImg} /></View>
      </View> 
    </View>
  )
}

export default class Slider2 extends Component {
  render() {
    const a = [0,1,2,3]
    const abilitiesDom = a.map((v)=>{
      return <View key={v}><AblititiesItem /></View>
    })
    return (
      <View style={styles.continer}>
        <SpaceBlank title="本月数据"/>
        {abilitiesDom}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  continer:{
    width:fullWidth,
    backgroundColor:"#fff",
  },
  ablitities:{
    flexDirection:"row",
    padding:10,
    width:fullWidth,
    borderBottomColor:"#e0e6eb",
    borderBottomWidth:0.5,
  },
  winRate:{
    width:100,
    justifyContent:'center',
    alignItems:"center",
  },
  ablitityDetial:{
    flex:1,
    flexDirection:"row",
    flexWrap:"wrap",
  },
  abilityImg:{
    width:((fullWidth - 150) / 5),
    height:((fullWidth - 150) / 5),
    // width:50,
    // height:50,
    marginBottom:5,
    marginRight:5
  },
  textBlod:{
    fontSize:20,
    fontWeight:"bold"
  }
})
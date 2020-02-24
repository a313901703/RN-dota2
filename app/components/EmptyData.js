import React, { Component } from 'react'
import { View, Text,Image } from 'react-native'

export default class EmptyData extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <View style={{flex:1,justifyContent: 'center',alignItems:"center",height:150}}>
        <Image source={require('../images/empty.png')} style={{marginBottom:15}}/>
        <Text style={{color:"#666"}}>没有数据</Text>
      </View>
    )
  }
}

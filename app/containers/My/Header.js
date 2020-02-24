import React, { Component } from 'react'
import { StyleSheet,View, Text,Image } from 'react-native'
import { connect } from 'react-redux'
import { Flex ,Icon } from '@ant-design/react-native'

@connect(({ player }) => ({
  player
}))


export default class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    const { info } = this.props.player
    const uri = info ? info.avatarfull : ''
    return (
      <View style={styles.container}>
        <Flex direction="row">
          <Image source={{uri}} style={styles.thumb} /> 
          <View style={styles.userInfo}>
            <Text style={styles.userName}>{info.personaname}</Text>
            <View  style={{height:5}}/>
            <Text style={styles.steamId}>steamId: {info.steamId}</Text>
          </View>
          <View style={styles.more}>
            <Text><Icon name="right" color="#fff"/></Text>
          </View>
        </Flex>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    height:170,
    backgroundColor:"#222",
    paddingTop:70,
    paddingLeft:25,
    paddingRight:25
  },
  thumb:{
    width:60,
    height:60,
    borderRadius:30,
  },
  userInfo:{
    marginLeft:25,
    flex:1,
  },
  more:{
    width:30
  },
  moreIcon:{
    color:"#fff"
  },
  userName:{
    color:'#fff',
    fontWeight:'bold',
    fontSize:17,
  },
  steamId:{
    color:'#fff',
  }
})

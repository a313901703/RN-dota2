import React, { Component } from 'react'
import { connect } from 'react-redux'
import {StyleSheet,Image ,View,Text } from 'react-native'
import { WhiteSpace,WingBlank,Flex } from '@ant-design/react-native'
import { CircleThumb } from '../../../components/Thumb'

@connect(({ player }) => ({
  player
}))

class UserInfo extends Component {
  componentDidMount(){
    const {dispatch} = this.props
    dispatch({
      type:"player/fetchGreatestHero"
    })
  }

  render() {
    const { info,greatestHero } = this.props.player
    return (
      <View>
        <WingBlank style={{ paddingTop: 10}}>
          <View>
            <Text>账号</Text>
          </View>
        </WingBlank>
        <WhiteSpace size="sm"/>
          <View style={{backgroundColor:'#fff',height:200,borderBottomColor:"#ddd",borderBottomWidth:0.5,borderTopColor:"#ddd",borderTopWidth:0.5}} >
            <WingBlank style={{ paddingTop: 10}}>
              <Flex direction="row" style={{marginBottom:10}}>
                <CircleThumb uri={info.avatar || ''}/>
                <View style={{marginLeft:15}}><Text>{info.personaname || ''}</Text></View>
              </Flex>
              <View>
                <Image source={require('../../../images/timg.jpeg')} resizeMode="cover" style={{width:'100%',height:120,borderRadius:15}}/>
                <View style={[styles.imgTextItem]}><Text style={styles.imageHeader}>{greatestHero.hero ? greatestHero.hero.cn_name : ''}</Text></View>
                <View style={[styles.imgTextItem,{top:40,backgroundColor:"rgba(0,0,0,0.3)",paddingRight:15,height:50}]}>
                  <Text style={styles.imageHeader}>场次:{greatestHero.matches_count || 'N/A'}   胜率:{greatestHero.win_rate  || 'N/A'}   KDA:{greatestHero.kda  || 'N/A'}  </Text>
                </View>
                <View style={[styles.imgTextItem,{top:90,height:20}]}>
                  <Text style={{color:"#fff"}} />
                </View>
              </View>
            </WingBlank>
          </View>
      </View>
    )
  } 
}

  const styles = StyleSheet.create({
    imgTextItem:{
      flex:1,
      position:"absolute",
      justifyContent:"center",
      top:0,
      height:40,
      paddingLeft:15,
    },
    imageHeader:{
      color:"#fff",
      fontSize:18,
      fontWeight:'bold',
    }
  })
export default UserInfo
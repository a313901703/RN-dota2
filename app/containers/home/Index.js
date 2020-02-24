import React, { Component } from 'react'
import {  ScrollView, Text ,View} from 'react-native'
import { connect } from 'react-redux'

import { WhiteSpace, WingBlank , NoticeBar, Flex ,Icon} from '@ant-design/react-native'

import GameLists from './GameLists'
import UserInfo from './components/User'
import Concern from './components/Concern'

@connect()
class Home extends Component {
  static navigationOptions = {
    tabBarLabel: '首页',
    headerTitle: "title",
    tabBarIcon: ({ focused }) => 
       focused ? <Text><Icon name="home" color="#000"/></Text>: <Text><Icon name="home" color="gray"/></Text>
      // <Image
      //   style={[styles.icon, { tintColor: focused ? '#030303' : 'gray' }]}
      //   source={require('../../images/house.png')}
      // />
    ,
  }

  render() {
    return (
      <ScrollView
        alwaysBounceVertical={false}
        disableScrollViewPanResponder
        refreshControl={false}
        showsVerticalScrollIndicator={false}
        bounces={false}
      >
        <UserInfo />
        {false ?  <NoticeBar
          onPress={() => {}}
          marqueeProps={{ loop: true, style: { fontSize: 12, color: 'red' } }}
        >
          Notice: NoticeNoticeNoticeNoticeNoticeNoticeNoticeNoticeNotice.
        </NoticeBar> : <View />}
        <WhiteSpace size="sm"/>
        <Concern />
        <WhiteSpace size="sm"/>
        <WingBlank style={{ paddingTop: 10}}>
          <Flex direction="row" justify="between">
            <Flex.Item>
              <Text>战绩</Text>
            </Flex.Item>
            <View style={{width:100}}>
              <Flex direction="row" >
                <Flex.Item>
                  <View style={{alignItems:"flex-end"}}>
                    <Text style={{color:"#666",fontSize:12}}>查看更多 </Text>
                  </View>
                </Flex.Item>
                <View style={{width:15}}>
                  <Icon name="right" size="12" color="#666" />
                </View>
              </Flex>
            </View>
          </Flex>
        </WingBlank>
        <WhiteSpace size="sm"/>
        
        <View style={{backgroundColor:'#fff'}} >
          <WingBlank>
            {/* <GameLists /> */}
          </WingBlank>
        </View>
        <View style={{height:15}}/>
      </ScrollView>
    )
  }
}

export default Home

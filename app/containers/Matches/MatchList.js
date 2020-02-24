import React, { Component } from 'react'
import {  StyleSheet,View,Text , Image} from 'react-native'
import { getList } from "@api/leagues"
import { WhiteSpace, WingBlank , ListView, Flex } from '@ant-design/react-native'

export default class MatchList extends Component {
  onFetch = async (
    page = 1,
    startFetch,
    abortFetch
  ) => {
    try {
      const pageLimit = 15
      let rowData = []
      try{
        const res = await getList(page,pageLimit)
        rowData = res.items || []
      }catch{
        console.log('request match error')
      }

      startFetch(rowData, pageLimit)
    } catch (err) {
      console.log('catch error',err)
      abortFetch() // manually stop the refresh or pagination if it encounters network error
    }
  };

  renderItem = (item) => (
    <WingBlank>
      <Flex align="start">
        <View style={{ padding: 10,paddingLeft:0}}>
          <Image
            style={styles.ThumbStyle}
            source={{uri: item.thumb}}
          />
        </View>
        <View style={{ padding: 10,height:'100%'}}>
          <View style={{flex:1}}>
            <Text style={styles.matchTitle}>{item.league_name}</Text>
          </View>
          <View style={{justifyContent:"center",flex:1}}>
            <Text style={{color:"#888",fontSize:12}}>
              {item.prize_poll}    {item.integral ? (`${item.integral  }积分`) : ''}
            </Text>
          </View>
          <View style={{justifyContent:"flex-end",flex:1}}>
            <Text style={{fontSize:12,color:"#888"}}>{item.start_time} ~ {item.end_time} </Text>  
          </View>
        </View>
      </Flex>
    </WingBlank>
  );

  renderHeaderView = () => (
    <View style={styles.renderHeader}>
      <WhiteSpace size="sm"/>
      <WingBlank style={{ paddingTop: 10}}>
        <Flex direction="row" justify="between">
          <Flex.Item>
            <Text>赛事信息</Text>
          </Flex.Item>
        </Flex>
      </WingBlank>
    </View>
  )

  render() {
    // const { lists } = this.state
    return (
      // <View />
      <ListView
        style={styles.container}
        onFetch={this.onFetch}
        keyExtractor={(item, index) =>
          `${item} - ${index}`
        }
        header={this.renderHeaderView}
        renderItem={this.renderItem}
      />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#fff"
  },
  renderHeader:{
    backgroundColor:"#efefef",
    paddingBottom:5,
  },
  renderItem:{
  },
  icon: {
    width: 23,
    height: 23,
  },
  ThumbStyle:{
    width:100,
    height:70
  },
  matchTitle:{
    fontWeight:"bold",
    fontSize:14
  }
})

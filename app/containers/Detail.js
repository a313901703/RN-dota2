import React, { Component } from 'react'
import { StyleSheet, View ,Text,ScrollView} from 'react-native'
import { connect } from 'react-redux'
import { Flex  } from '@ant-design/react-native'
import Players from './GameDetial/Players'

@connect(({ match }) => ({
  match
}))

class Detail extends Component {
  static navigationOptions = {
    title: '比赛详情',
  }

  constructor(props) {
    super(props)
    this.state = {
    }
  }

  componentDidMount(){
    if (this.props.navigation && this.props.navigation.state.params) {
      const {match} = this.props.navigation.state.params
      const {dispatch} = this.props.navigation
      if (dispatch && match) {
        const {match_id} = match
        dispatch({
          type:"match/fetchGame",
          payload:{
            id:match_id,
            expand:'chartData'
          }
        })
      }
    }
  }

  render() {
    // const {statistic} = this.state
    const {games} = this.props.match
    const {match} = this.props.navigation.state.params
    if (!match || !match.match_id) {
      return <View />
    }
    const info = games[match.match_id] || match
    const statistic = info.chartData || {}
    return (
      <ScrollView 
        contentContainerStyle={styles.container}
        alwaysBounceVertical={false}
        disableScrollViewPanResponder
        refreshControl={false}
        showsVerticalScrollIndicator={false}
        bounces={false}
      >
        <View style={styles.header} >
          <Flex direction="row">
            <View style={styles.headerBox} >
              <Text style={styles.headerTitle}>结束时间</Text>
              <View style={{height:8}}/>
              <Text style={styles.headerText}>{info.start}</Text>
            </View>
            <View style={styles.headerBox} >
              <Text style={styles.headerTitle}>比赛时长</Text>
              <View style={{height:8}}/>
              <Text style={styles.headerText}>{info.duration}分钟</Text>
            </View>
            <View style={styles.headerBox} >
              <Text style={styles.headerTitle}>Level</Text>
              <View style={{height:8}}/>
              <Text style={styles.headerText}>High</Text>
            </View>
            <View style={styles.headerBox} >
              <Text style={styles.headerTitle}>比赛模式</Text>
              <View style={{height:8}}/>
              <Text style={styles.headerText}>{info.game_mode}</Text>
            </View>
          </Flex>
        </View>
        {info ? <View><Players info={info} statistic={statistic}/></View> : <View />}
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    minHeight:1000,
  },
  header: {
    height:70,
    backgroundColor:"#333",
  },
  headerTitle:{
    fontWeight:"bold",
    color:"#fff",
  },
  headerText:{
    fontWeight:"bold",
    fontSize:12,
    color:"#fff"
  },
  headerBox:{
    height:70,
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  }
})

export default Detail

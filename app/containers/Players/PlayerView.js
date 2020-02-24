import React, { Component } from 'react'
import { View, Text ,StyleSheet,ScrollView ,Dimensions,Animated,TouchableWithoutFeedback} from 'react-native'
import { Icon } from '@ant-design/react-native'
import { connect } from 'react-redux'
import {CircleThumb} from '../../components/Thumb'
import { NavigationActions } from '../../utils'
import Slider1 from './Slider1'
import Slider2 from './Slider2'
import Slider3 from './Slider3'
import Slider4 from './Slider4'

const fullWidth = Dimensions.get('window').width
const fullHeight = Dimensions.get('window').height
const tabItemWidth = fullWidth / 4
const leftPosition = tabItemWidth / 2 - 15

@connect(({ player }) => ({
  player
}))

export default class PlayerView extends Component {
  static navigationOptions = {
    header: null,
  }

  constructor(props) {
    super(props)
    this.state = {
      iconLeft:new Animated.Value(leftPosition),
      player : props.navigation.state.params.player || {}
    }
  }

  componentDidMount(){
    const { dispatch } = this.props
    const {player } = this.state
    dispatch({
      type:"player/fetchView",
      payload:{
        expand:'dataStatistic,wl,combine,recentMatches,heroes,records'
      },
      account_id:player.account_id
    })
    // dispatch({
    //   type:"player/fetchView",
    //   payload:{
    //     expand:'recentMatches,heroes,records'
    //   },
    //   account_id:player.account_id
    // })
  }

  goback = () => {
    const dispatch = this.props.navigation ? this.props.navigation.dispatch : null
    if (dispatch) {
      dispatch(NavigationActions.back())
    }
  }

  handleHorizontalScroll(event){
    const {x} = event.nativeEvent.contentOffset
    Animated.timing(
      this.state.iconLeft,
      {
        toValue: (x / fullWidth * tabItemWidth) + leftPosition,
        duration: 500,
      }
    ).start()
  }

  render() {
    const { iconLeft } = this.state
    let {player} = this.state
    if (!player) {
      return <View />
    }
    player = this.props.player.playersList[player.account_id] || player
    const records = player.records || null
    const combine = player.combine || null
    console.log(combine,'combine')
    // return <View />
    return (
      <View style={styles.container}>
        <ScrollView
          alwaysBounceVertical={false}
          disableScrollViewPanResponder
          refreshControl={false}
          showsVerticalScrollIndicator={false}
          bounces={false}>
          <View style={styles.header}>
            <View style={styles.headerTitle}>
              <CircleThumb uri={player.avatarfull} currentStyle={{width:50,height:50,borderRadius:25,marginBottom: 10}}/>
              <Text style={styles.personaname}> {player.personaname} </Text>
            </View>
            <View style={styles.headerItems}>
              <View style={styles.headerItem}>
                <Text style={styles.headerItemText}> 综合统计 </Text>
              </View>
              <View style={styles.headerItem}>
                <Text style={styles.headerItemText}> 近期表现 </Text>
              </View>
              <View style={styles.headerItem}>
                <Text style={styles.headerItemText}> 最高纪录 </Text>
              </View>
              <View style={styles.headerItem}>
                <Text style={styles.headerItemText}> 选手对手 </Text>
              </View>
            </View>
            <View style={{position:"absolute",top:50,left:15}} >
              <TouchableWithoutFeedback onPress={()=>this.goback()}>
                <Text><Icon size={25} name="left" color="#fff"/></Text>
              </TouchableWithoutFeedback>
            </View>
          </View>
          <View>
            <ScrollView
                horizontal
                bounces={false}
                automaticallyAdjustContentInsets={false}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                // snapToInterval={fullWidth-1}
                onMomentumScrollEnd={(e)=>this.handleHorizontalScroll(e)}
                pagingEnabled
                // onScroll={this.handleHorizontalScroll}
              >
              <View style={[styles.sliderItem]}><Slider1 player={player}/></View>
              <View style={[styles.sliderItem]}><Slider2 /></View>
              <View style={[styles.sliderItem]}><Slider3 records={records}/></View>
              <View style={[styles.sliderItem]}><Slider4 combine={combine}/></View>
            </ScrollView>
            <Animated.Image source={require("../../images/top_sanjiao.png")} style={[styles.imgIcon,{left:iconLeft}]} resizeMode="contain"/>
          </View>
          
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:"#fff",
  },
  header:{
    backgroundColor:"#000",
    paddingTop:30,
    height:170,
  },
  headerTitle:{
    height:100,
    justifyContent:"center",
    alignItems:"center",
  },
  personaname:{
    color:"#fff",
    // fontSize:12
  },
  headerItems:{
    flexDirection:"row",
  },
  headerItem:{
    flex:1,
    justifyContent:"center",
    alignItems:"center"
  },
  headerItemText:{
    color:"#fff"
  },
  sliderItem:{
    width:fullWidth,
    minHeight:fullHeight - 150
  },
  imgIcon:{
    position:"absolute",
    top:-14,
    width:30,
    height:20
  },
})



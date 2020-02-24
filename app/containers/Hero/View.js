import React, { Component } from 'react'
import { StyleSheet, View, Text,ImageBackground,TouchableWithoutFeedback,ScrollView,Dimensions,Animated } from 'react-native'
import { Icon } from '@ant-design/react-native'
import { NavigationActions } from '../../utils'
import Slider1 from './Slider1'
import Slider2 from './Slider2'
import Slider3 from './Slider3'
import Slider4 from './Slider4'
import Global from '../../global'

const fullWidth = Dimensions.get('window').width
const fullHeight = Dimensions.get('window').height
const tabItemWidth = fullWidth / 4
const leftPosition = tabItemWidth / 2 - 15


export default class HeroView extends Component {
  static navigationOptions = {
    header: null,
  }
  
  constructor(props) {
    super(props)
    this.state = {
      current:0,
      iconLeft:new Animated.Value(leftPosition),
    }
  }

  goBack = () => {
    const {dispatch} = this.props.navigation
    dispatch && dispatch(NavigationActions.back())
  }

  handleHorizontalScroll(event){
    const {x} = event.nativeEvent.contentOffset
    this.setState({
      current:x / fullWidth
    })
    Animated.timing(
      this.state.iconLeft,
      {
        toValue: (x / fullWidth * tabItemWidth) + leftPosition,
        duration: 500,
      }
    ).start()
  }

  render() {
    const { iconLeft,current } = this.state
    console.log(current,'current')
    return (
      
      <View style={styles.continer}>
        <ScrollView
            alwaysBounceVertical={false}
            disableScrollViewPanResponder
            refreshControl={false}
            showsVerticalScrollIndicator={false}
            bounces={false}
            >
          <View style={styles.header}>
            <ImageBackground source={{uri:`${Global.PRO_IMAGE_HOSTS  }timg.jpeg`}} style={styles.headerImg} resizeMode="stretch">
              <View style={styles.heroName}>
                <TouchableWithoutFeedback onPress={()=>this.goBack()}>
                <View style={styles.heroNameItem}><Text><Icon name="left" color="#fff" size={20}/></Text></View>
                </TouchableWithoutFeedback>
                <View style={[styles.heroNameItem,{alignItems:"center"}]}><Text style={{fontSize:20,color:"#fff"}}>屠夫</Text></View>
                <View style={styles.heroNameItem}/>
              </View>
              <View style={styles.tabs}>
                <View style={styles.tabItem}>
                  <Text style={{color:"#fff"}}>英雄总览</Text>
                </View>
                <View style={styles.tabItem}>
                  <Text style={{color:"#fff"}}>技能加点</Text>
                </View>
                <View style={styles.tabItem}>
                  <Text style={{color:"#fff"}}>物品出装</Text>
                </View>
                <View style={styles.tabItem}>
                  <Text style={{color:"#fff"}}>克制关系</Text>
                </View>
              </View>
            </ImageBackground>
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
              <View style={[styles.sliderItem]}><Slider1 /></View>
              <View style={[styles.sliderItem]}><Slider2 /></View>
              <View style={[styles.sliderItem]}><Slider3 /></View>
              <View style={[styles.sliderItem]}><Slider4 /></View>
            </ScrollView>
            <Animated.Image source={require("../../images/top_sanjiao.png")} style={[styles.imgIcon,{left:iconLeft}]} resizeMode="contain"/>
          </View>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  continer:{
    flex:1,
    backgroundColor:"#fff"
  },
  header:{
    height:150,
    backgroundColor:"#fff",
  },
  headerImg:{
    height:150,
    width:"100%",
    paddingTop:30,
  },
  heroName:{
    flexDirection:"row",
    paddingHorizontal:15
  },
  heroNameItem:{
    flex:1,
    justifyContent:"center",
  },
  tabs:{
    position:'absolute',
    bottom:20,
    left:0,
    flexDirection:"row",
  },
  tabItem:{
    flex:1,
    flexDirection:"row",
    justifyContent:"center"
  },
  imgIcon:{
    position:"absolute",
    top:-14,
    width:30,
    height:20
  },
  sliderItem:{
    width:fullWidth,
    minHeight:fullHeight,
  },
})

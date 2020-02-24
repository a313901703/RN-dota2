import React, { Component } from 'react';
import { StyleSheet,View, Text,ScrollView ,Dimensions,Image,Animated} from 'react-native';

const fullWidth = Dimensions.get('window').width
const fullHeight = Dimensions.get('window').height
const tabItemWidth = fullWidth / 4
const leftPosition = tabItemWidth / 2 - 15

export default class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      iconLeft:new Animated.Value(leftPosition),
    };
  }

  handleHorizontalScroll(event){
    const {x,y} = event.nativeEvent.contentOffset
    Animated.timing(
      this.state.iconLeft,
      {
        toValue: (x / fullWidth * tabItemWidth) + leftPosition,
        duration: 500,
      }
    ).start();
  }

  render() {
    const { iconLeft } = this.state;

    return (
      <View>
        <View style={styles.tabs}>
          <View style={styles.tabItem}>
            <Text style={{color:"#fff"}}>1</Text>
          </View>
          <View style={styles.tabItem}>
            <Text style={{color:"#fff"}}>2</Text>
          </View>
          <View style={styles.tabItem}>
            <Text style={{color:"#fff"}}>3</Text>
          </View>
          <View style={styles.tabItem}>
            <Text style={{color:"#fff"}}>4</Text>
          </View>
        </View>
        <ScrollView
          horizontal
          style={{backgroundColor:'#fff'}}
          bounces={false}
          automaticallyAdjustContentInsets={false}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          scrollEventThrottle={200}
          snapToInterval={fullWidth}
          onMomentumScrollEnd={(e)=>this.handleHorizontalScroll(e)}
          pagingEnabled={true}
          //onScroll={this.handleHorizontalScroll}
        >
          <View style={styles.sliderItem}>
            <Text>11111</Text>
          </View>

          <View style={styles.sliderItem}>
            <Text>222</Text>
          </View>

          <View style={styles.sliderItem}>
            <Text>333</Text>
          </View>

          <View style={styles.sliderItem}>
            <Text>444</Text>
          </View>
        </ScrollView>
        <Animated.Image source={require("../images/top_sanjiao.png")} style={[styles.imgIcon,{left:iconLeft}]} resizeMode="contain"/>
      </View>
      
    );
  }
}


const styles = StyleSheet.create({
  sliderItem:{
    width:fullWidth,
    minHeight:fullHeight,
    justifyContent: 'center',
    alignItems:"center",
  },
  tabs:{
    flexDirection:"row",
    backgroundColor:"#000",
    height:100,
  },
  tabItem:{
    flex:1,
    height:100,
    justifyContent:'center',
    alignItems:"center",
  },
  imgIcon:{
    position:"absolute",
    top:86,
    left:20,
    width:30,
    height:20
    // width:20,
    // height:20
  }
})


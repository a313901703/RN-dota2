import React, { Component } from 'react'
import { StyleSheet, View, Text,Image,ImageBackground,Dimensions,TouchableWithoutFeedback} from 'react-native'
import SpaceBlank from "../../components/SpaceBlank"
import { Slider } from '@ant-design/react-native'

const fullWidth = Dimensions.get('window').width

const StatisticItem = (props) => {
  const {title,content} = props
  return (
    <View style={styles.statisticItem}>
      <Text style={{fontSize:17}}>{content}</Text>
      <View style={{height:7}}/>
      <Text style={{color:"gray",fontSize:12}}>{title}</Text>
    </View>
  )
}

const AttributeItem = (props) => {
  const {title,content} = props
  return (
    <View style={styles.attributeItem}>
      <Text >{title}</Text>
      <View style={{height:5}}/>
      <Text style={styles.attributeItemText}>{content}</Text>
    </View>
  )
}

export default class Slider1 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      level:1
    }
  }

  handleSliderChange(v){
    if (v === this.state.level) {
      return
    }
    this.setState({
      level:v
    })
  }

  levelChange(type){
    const { level } = this.state
    if (type && level < 25) {
      this.setState({
        level:level + 1
      })
    }
    if (!type && level > 1) {
      this.setState({
        level:level - 1
      })
    }
  }

  render() {
    const { level } = this.state
    return (
      <View>
        <SpaceBlank title="概要"/>
          <View style={styles.statistic}>
            <StatisticItem title="场次" content="1000W" />
            <StatisticItem title="场次排名" content="1" />
            <StatisticItem title="胜率" content="55%" />
            <StatisticItem title="胜率排名" content="20" />
          </View>
          <View style={styles.spaceBlank}>
            <View style={{justifyContent: 'center',height:"100%"}}><Text>英雄属性</Text></View>
            <View style={{flexDirection:"row",height:"100%",alignItems:"center"}}>
              <Image source={require('../../images/icon/strong_img.png')} style={{width:17,height:17}} />
              <Text>  25  </Text>
              <Image source={require('../../images/icon/int_image.png')}  style={{width:17,height:17}} />
              <Text>  25  </Text>
              <Image source={require('../../images/icon/agi_image.png')}  style={{width:17,height:17}} />
              <Text>  25  </Text>
            </View>
          </View>
          <View style={styles.sliderBox}>
            <View style={styles.sliderImgBox}>
              <TouchableWithoutFeedback onPress={()=>this.levelChange(false)}>
              <Image source={require('../../images/jian_cel.png')} style={styles.sliderImg} />
              </TouchableWithoutFeedback>
            </View>
            <View style={{flex:1}}>
              <Slider
                value={level}
                // defaultValue={1}
                ref="levelSlider"
                minimumTrackTintColor="#bbb"
                maximumTrackTintColor="#e0e6eb"
                min={1}
                max={25}
                step={1}
                onAfterChange={(v)=>this.handleSliderChange(v)}
              />
            </View>
            <View style={{paddingTop:10,paddingLeft:10}}><Text>{level}级</Text></View>
            <View style={styles.sliderImgBox}>
              <TouchableWithoutFeedback onPress={()=>this.levelChange(true)}>
              <Image source={require('../../images/plus_cel.png')} style={styles.sliderImg} />
              </TouchableWithoutFeedback>
            </View>
          </View>
          <View style={styles.attributes}>
            <AttributeItem title="攻击" content="41 - 50"/>
            <AttributeItem title="护甲" content="5"/>
            <AttributeItem title="移动速度" content="290"/>
            <AttributeItem title="攻击速度" content="0.5"/>
          </View>
          <View style={[styles.attributes,{paddingBottom:15}]}>
            <AttributeItem title="生命值" content="541"/>
            <AttributeItem title="魔法值" content="300"/>
            <AttributeItem title="转身速度" content="0.5"/>
            <AttributeItem title="攻击前摇" content="0.56"/>
          </View>
          <SpaceBlank title="天赋"/>
          <View style={styles.gifts}>
            <ImageBackground source={require('../../images/gift-tree.png')} style={styles.gitfTreeImg} resizeMode="contain">
            <View style={[styles.giftLeftItem,{top:0}]}>
              <View style={styles.giftiIemTitle}><Text style={styles.giftTitleText}>生命 + 200</Text></View>
              <View style={styles.giftiIemDesc}>
                <Text style={styles.attributeItemText}>40%</Text>
                <Text style={styles.attributeItemText}>50%</Text>
                <Text style={styles.attributeItemText}>60%</Text>
              </View>
            </View>
            <View style={[styles.giftRightItem,{top:0}]}>
              <View style={styles.giftiIemTitle}><Text style={styles.giftTitleText}>敏捷 + 10</Text></View>
              <View style={styles.giftiIemDesc}>
                <Text style={styles.attributeItemText}>40%</Text>
                <Text style={styles.attributeItemText}>50%</Text>
                <Text style={styles.attributeItemText}>60%</Text>
              </View>
            </View>

            <View style={[styles.giftLeftItem,{top:70}]}>
              <View style={styles.giftiIemTitle}><Text style={styles.giftTitleText}>生命 + 200</Text></View>
              <View style={styles.giftiIemDesc}>
                <Text style={styles.attributeItemText}>40%</Text>
                <Text style={styles.attributeItemText}>50%</Text>
                <Text style={styles.attributeItemText}>60%</Text>
              </View>
            </View>
            <View style={[styles.giftRightItem,{top:70}]}>
            <View style={styles.giftiIemTitle}><Text style={styles.giftTitleText}>敏捷 + 10</Text></View>
              <View style={styles.giftiIemDesc}>
                <Text style={styles.attributeItemText}>40%</Text>
                <Text style={styles.attributeItemText}>50%</Text>
                <Text style={styles.attributeItemText}>60%</Text>
              </View>
            </View>

            <View style={[styles.giftLeftItem,{top:150}]}>
              <View style={styles.giftiIemTitle}><Text style={styles.giftTitleText}>生命 + 200</Text></View>
              <View style={styles.giftiIemDesc}>
                <Text style={styles.attributeItemText}>40%</Text>
                <Text style={styles.attributeItemText}>50%</Text>
                <Text style={styles.attributeItemText}>60%</Text>
              </View>
            </View>
            <View style={[styles.giftRightItem,{top:150}]}>
            <View style={styles.giftiIemTitle}><Text style={styles.giftTitleText}>敏捷 + 10</Text></View>
              <View style={styles.giftiIemDesc}>
                <Text style={styles.attributeItemText}>40%</Text>
                <Text style={styles.attributeItemText}>50%</Text>
                <Text style={styles.attributeItemText}>60%</Text>
              </View>
            </View>

            <View style={[styles.giftLeftItem,{top:230}]}>
              <View style={styles.giftiIemTitle}><Text style={styles.giftTitleText}>生命 + 200</Text></View>
              <View style={styles.giftiIemDesc}>
                <Text style={styles.attributeItemText}>40%</Text>
                <Text style={styles.attributeItemText}>50%</Text>
                <Text style={styles.attributeItemText}>60%</Text>
              </View>
            </View>
            <View style={[styles.giftRightItem,{top:230}]}>
            <View style={styles.giftiIemTitle}><Text style={styles.giftTitleText}>敏捷 + 10</Text></View>
              <View style={styles.giftiIemDesc}>
                <Text style={styles.attributeItemText}>40%</Text>
                <Text style={styles.attributeItemText}>50%</Text>
                <Text style={styles.attributeItemText}>60%</Text>
              </View>
            </View>
            </ImageBackground>
          </View>
          <SpaceBlank title="比赛推荐"/>
          <View style={styles.abilitys} />
          <SpaceBlank title="趋势图"/>
          <View style={styles.chart} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  spaceBlank:{
    height:40,
    paddingHorizontal:15,
    backgroundColor:"#e0e6eb",
    flexDirection:"row",
    justifyContent:"space-between",
  },
  // 统计
  statistic:{
    flexDirection:"row",
    justifyContent:"space-between"
  },
  statisticItem:{
    flex:1,
    height:65,
    justifyContent:"center",
    alignItems:"center"
  },
  // 属性
  sliderBox:{
    flexDirection:"row",
    width:fullWidth,
    justifyContent:"space-between",
  },
  sliderImgBox:{
    paddingTop:10,
    paddingHorizontal:15,
  },
  sliderImg:{
    width:20,
    height:20,
  },
  attributes:{
    justifyContent:"space-around",
    flexDirection:"row",
    paddingTop:15,
  },
  attributeItem:{
    width:fullWidth / 5,
    height: 50,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"#efefef",
  },
  attributeItemText:{
    color:"gray",
    fontSize:12
  },
  // 天赋
  gifts:{
    height:300,
    justifyContent:"center",
    alignItems:"center",
    padding:15,
  },
  gitfTreeImg:{
    width:'100%',
    height:"100%",
  },
  giftItem:{
    position:'absolute'
  },
  giftLeftItem:{
    position:'absolute',
    left:0,
    width:'40%',
    // alignItems:"flex-end",
  },
  giftRightItem:{ 
    position:'absolute',
    right:0,
    width:'40%',
    // alignItems:"flex-start",
  },
  giftiIemTitle:{
    flexDirection:"row",
    justifyContent:"center",
    marginBottom:4,
    width:"100%",
  },
  giftTitleText:{

  },
  giftiIemDesc:{
    flexDirection:"row",
    justifyContent:"space-around",
    width:"100%",
  },
})

import React, { Component } from 'react'
import { StyleSheet, View, Text,Image,Dimensions,ScrollView,TouchableWithoutFeedback } from 'react-native'
import { connect } from 'react-redux'
import {  Flex ,ActivityIndicator} from '@ant-design/react-native'
import { getLists } from "@api/hero"
import { NavigationActions } from '../../utils'
import SpaceBlank from "../../components/SpaceBlank"

const fullHeight = Dimensions.get('window').height

@connect(({ app }) => ({ ...app }))
export default class Hero extends Component {
  static navigationOptions = {
    title: '英雄',
  }

  constructor(props) {
    super(props)
    this.state = {
      lists: [],
      scrollX:0,
    }
  }

  componentDidMount(){
    getLists(1,200).then((res)=>{
      this.setState({
        lists:res.items
      })
    }).catch(()=>{

    })
  }

  renderItem = (item) => (
    <View style={styles.item} key={item.hero_id}>
      <Flex align="center">
        <View style={[styles.tableItem,{width:200}]}>
          <View style={styles.ThumbStyle}/>
          {/* <Image
            style={styles.ThumbStyle}
            source={{uri: item.thumb}}
          /> */}
        </View>
        <View style={styles.tableItem}>
          <Text style={styles.matchTitle}>100</Text>
        </View>
        <View style={styles.tableItem}>
          <Text style={styles.heroDataText}>100</Text>
        </View>
        <View style={styles.tableItem}>
          <Text style={styles.heroDataText}>100</Text>
        </View>
        <View style={styles.tableItem}>
          <Text style={styles.heroDataText}>100</Text>
        </View>
        <View style={styles.tableItem}>
          <Text style={styles.heroDataText}>100</Text>
        </View>
        <View style={styles.tableItem}>
          <Text style={styles.heroDataText}>100</Text>
        </View>
        <View style={styles.tableItem}>
          <Text style={styles.heroDataText}>100</Text>
        </View>
        <View style={styles.tableItem}>
          <Text style={styles.heroDataText}>100</Text>
        </View>
        <View style={styles.tableItem}>
          <Text style={styles.heroDataText}>100</Text>
        </View>
        <View style={styles.tableItem}>
          <Text style={styles.heroDataText}>100</Text>
        </View>
      </Flex>
    </View>
  );

  renderHeaderView = () => (
    <View style={styles.item} key="hero_header">
      <Flex align="center">
        <View style={[styles.tableHeaderItem,{width:200}]}>
          {/* <Text style={styles.matchTitle}>英雄</Text> */}
        </View>
        <View style={styles.tableHeaderItem}>
          <Text style={styles.matchTitle}>场次</Text>
        </View>
        <View style={styles.tableHeaderItem}>
          <Text style={styles.heroDataText}>胜率</Text>
        </View>
        <View style={styles.tableHeaderItem}>
          <Text style={styles.heroDataText}>KDA</Text>
        </View>
        <View style={styles.tableHeaderItem}>
          <Text style={styles.heroDataText}>场均击杀</Text>
        </View>
        <View style={styles.tableHeaderItem}>
          <Text style={styles.heroDataText}>场均死亡</Text>
        </View>
        <View style={styles.tableHeaderItem}>
          <Text style={styles.heroDataText}>场均助攻</Text>
        </View>
        <View style={styles.tableHeaderItem}>
          <Text style={styles.heroDataText}>场均GPM</Text>
        </View>
        <View style={styles.tableHeaderItem}>
          <Text style={styles.heroDataText}>场均XPM</Text>
        </View>
        <View style={styles.tableHeaderItem}>
          <Text style={styles.heroDataText}>场均反补</Text>
        </View>
        <View style={styles.tableHeaderItem}>
          <Text style={styles.heroDataText}>场均伤害</Text>
        </View>
      </Flex>
    </View>
  );

  renderFixHeaderView = () => {
    const {scrollX} = this.state
    const showBorder = scrollX > 5
    return (
      <View style={styles.item} key="hero_header">
        <View style={[showBorder && styles.tableItemRightBorder,styles.shadowBorderBox]}/>
        <Flex align="center">
          <View style={[styles.tableHeaderItem,{width:200}]}>
            <Text style={styles.matchTitle}>英雄</Text>
          </View>
        </Flex>
      </View>
    )
  }

  renderFixItems = (item)=>{
    const {scrollX} = this.state
    const showBorder = scrollX > 5
    return (
      <TouchableWithoutFeedback onPress={()=>this.goHeroView(item.hero_id)} key={item.hero_id}>
        <View style={styles.item} >
          <View style={[showBorder && styles.tableItemRightBorder,styles.shadowBorderBox]}/>
          <Flex align="center">
            <View style={styles.tableItem}>
              <Image
                style={styles.ThumbStyle}
                source={{uri: item.thumb}}
              />
            </View>
            <View style={[styles.tableItem]}>
              <Text style={styles.matchTitle}>{item.cn_name}</Text>
            </View>
          </Flex>
        </View>
      </TouchableWithoutFeedback>
    )
  }

  goHeroView = (heroId) => {
    const {dispatch} = this.props
    if (dispatch) {
      dispatch(NavigationActions.navigate({ routeName: 'HeroesView' }))
    }
  }

  handleHorizontalScroll = (event) => {
    const {x} = event.nativeEvent.contentOffset
    this.setState({
      scrollX:x
    })
  }

  handleHorizontalToTop = () => {
    this.setState({
      scrollX:0
    })
  }

  render() {
    const {lists} = this.state
    // if (lists.length <= 0) {
    //   return <View />
    // }
    const items = lists.map((v)=>this.renderItem(v))
    items.unshift(this.renderHeaderView())
    const fixItems = lists.map((v)=>this.renderFixItems(v))
    fixItems.unshift(this.renderFixHeaderView())
    return (
      <View style={styles.continer}>
        <ActivityIndicator
          animating={lists.length <= 0}
          toast
          size="large"
          text="Loading..."
        />
        <SpaceBlank title="英雄列表"/>
        <ScrollView
          alwaysBounceVertical={false}
          disableScrollViewPanResponder
          refreshControl={false}
          showsVerticalScrollIndicator={false}
          bounces={false}
          >
          <ScrollView
            horizontal
            style={{backgroundColor:'#fff'}}
            bounces={false}
            automaticallyAdjustContentInsets={false}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            scrollEventThrottle={200}
            // onScroll={this.handleHorizontalScroll}
            onScrollEndDrag={this.handleHorizontalScroll}
          >
            <View>
            {items}
            </View>
          </ScrollView>
          <View style={styles.fixItems}>
            {fixItems}
          </View>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  continer:{
    minHeight:fullHeight,
    backgroundColor:"#fff",
  },
  ThumbStyle:{
    width:60,
    height:30
  },
  item:{
    borderBottomColor:"#dfdfdf",
    borderBottomWidth:0.5
  },
  heroName:{
    width:150,
    flexDirection:"row",
  },
  heroDataText:{
    color:"gray"
  },
  tableItem:{
    width:100,
    alignItems:"center",
    justifyContent:"center",
    height:45
  },
  matchTitle:{
    
  },
  shadowBorderBox:{
    width:200,
    height:45,
    position:"absolute",
    top:0,
    left:0,
  },
  tableItemRightBorder:{
    borderRightWidth:1,
    borderRightColor:"#cfcfcf",
    shadowOffset:{
      width:2,
      height:3
    },
    shadowColor:"rgba(0,0,0,0.6)",
    shadowOpacity:3,
  },
  tableHeaderItem:{
    height:35,
    width:100,
    alignItems:"center",
    justifyContent:"center",
  },
  fixItems:{
    position:"absolute",
    top:0,
    left:0,
    backgroundColor:"#fff",
  }
})
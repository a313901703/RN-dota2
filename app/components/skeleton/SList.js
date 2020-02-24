import React, { Component } from 'react'
import { StyleSheet,View,Dimensions } from 'react-native'
import SCircle from './SCircle'
import SText from './SText'

const fullWidth = Dimensions.get('window').width

export default class SList extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  renderItem = (i)=> <View key={i} style={styles.item}>
      <View style={styles.thumb}><SCircle width={50} /></View>
      <View style={styles.content}>
        <View style={styles.contentItem}><SText width={fullWidth - 100}/></View>
        <View style={styles.contentItem}><SText width={fullWidth - 100}/></View>
        <View style={styles.contentItem}><SText width={fullWidth - 100}/></View>
      </View>
    </View>

  render() {
    const count = this.props.count || 10
    const items = []
    for (let index = 0; index < count; index += 1) {
      items.push(this.renderItem(index))
    }
    return (
      <View style={{backgroundColor:"#fff"}}>
        {items}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  item:{
    flexDirection:"row",
    paddingTop:5,
    height:60,
    borderBottomWidth:0.5,
    paddingHorizontal:5,
    borderBottomColor:"#ddd"
  },
  thumb:{

  },
  content:{
    marginLeft:15,
    paddingTop:5
  },
  contentItem:{
    marginBottom:5
  }
})

import React from 'react'
import { View, Text } from 'react-native'

const styles = {
  statisticItem:{
    flex:1,
    height:65,
    justifyContent:"center",
    alignItems:"center"
  },
}

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

export default StatisticItem

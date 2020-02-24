import React from 'react'
import { View, Text } from 'react-native'

const styles = {
  noData:{
    height:50,
    backgroundColor:"#fff",
    justifyContent:'center',
    alignItems:"center"
  },
}

const NodataDom = (props)=>{
  const style = props.style || {}
  return <View style={[styles.noData,style]}>
    <Text>暂无数据...</Text>
  </View>
}

export default NodataDom
import React from 'react'
import {Image ,View} from 'react-native'

export const CircleThumb  = (props) => {
  const uri = props.uri || 'https://facebook.github.io/react-native/docs/assets/favicon.png'
  return (
    <View >
      <Image source={{uri}} style={[styles.CircleThumbStyle,props.currentStyle || {}]} 
      />
    </View>
  )
}

export const Thumb  = (props) => {
  const uri = props.uri || 'https://facebook.github.io/react-native/docs/assets/favicon.png'
  return <View ><Image source={{uri}} style={[styles.ThumbStyle,props.currentStyle || {}]}/></View>
}

const styles = {
  CircleThumbStyle:{
    width:30,
    height:30,
    borderRadius:15
  },
  ThumbStyle:{
    width:40,
    height:40
  }
}




import React from 'react'
import { View } from 'react-native'


const SCircle = (props) => {
  const width = props.width || 30
  const height = width
  const bgColor = props.bgColor || "#ddd"
  const borderRadius = width / 2
  return <View style={{width,backgroundColor:bgColor,borderRadius,height}} />
}

export default SCircle
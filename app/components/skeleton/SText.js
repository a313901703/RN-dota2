import React from 'react'
import { View } from 'react-native'


const SText = (props) => {
  const width = props.width || 30
  const height = props.height || 10
  const bgColor = props.bgColor || "#ddd"
  const borderRadius = props.borderRadius || 5
  return <View style={{width,backgroundColor:bgColor,borderRadius,height}} />
}

export default SText
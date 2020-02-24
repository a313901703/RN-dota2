import React from 'react';
import { View, Text } from 'react-native';

const styles = {
  continer:{
    height:40,
    paddingLeft:15,
    justifyContent: 'center',
    backgroundColor:"#e0e6eb",
    //borderBottomColor: "#cfcfcf",
    //borderBottomWidth: 0.5,
  }
}
const SpaceBlank = (props)=>{
  let {title} = props
  title = title || "title"
  return (
    <View style={styles.continer}>
      <Text>{title}</Text>
    </View>
  )
}
export default SpaceBlank
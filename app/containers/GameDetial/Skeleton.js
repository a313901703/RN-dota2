import React, { Component } from 'react'
import { View } from 'react-native'
import SList from '../../components/skeleton/SList'

export default class Skeleton extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <View>
        <SList count={5} />
      </View>
    )
  }
}
       
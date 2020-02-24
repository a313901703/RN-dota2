import React, { Component } from 'react'
import { StyleSheet,View ,Text} from 'react-native'
import { connect } from 'react-redux'
import { Icon } from '@ant-design/react-native'
import { NavigationActions } from '../utils'

@connect(() => ({
  
}))

export default class Goback extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  goback = () => {
    const {dispatch} = this.props
    if (dispatch) {
      dispatch(NavigationActions.back())
    }
  }

  render() {
    const currentStyle = this.props.styles || {}
    const size = this.props.size || 20
    return (
      <View style={[styles.leftStyle,currentStyle]}>
        <Text><Icon size={100} name="account-book" color="#fff"/></Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  leftStyle:{
    position:"absolute",
  }
})


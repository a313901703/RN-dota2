import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import GameListsView from '../components/GameHeroList'

@connect(({ player }) => ({
  player
}))

export default class GameLists extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  componentDidMount(){
    
  }

  render() {
    let {games} = this.props
    const { playerId } = this.props
    const {gameLists} = this.props.player
    if (gameLists && gameLists[playerId]) {
      games = gameLists[playerId]
    }
    return (
      <View>
        <GameListsView games={games} />
      </View>
    )
  }
}

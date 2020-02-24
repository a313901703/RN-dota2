import React, { Component } from 'react'
import {StyleSheet,Dimensions, View, Text } from 'react-native'
import SpaceBlank from "../../components/SpaceBlank"
import StatisticItem from '../../components/StatisticItem'
import GameLists from '../../components/Gamelists'
import GameHeroList from '../../components/GameHeroList'
import Radar from "./components/Radar"

const fullWidth = Dimensions.get('window').width

export default class Slider1 extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    let recentGames = []
    let mostUseHero = []
    const {player} = this.props
    let win = 0            // 胜利
    let lose = 0           // 失败
    let kills = 0          // 击杀
    let deaths = 0         // 死亡
    let assists = 0        // 助攻

    if (player.wl) {
      win = player.wl.win || 0
      lose = player.wl.lose || 0
    }   
    
    if (player.dataStatistic) {
      kills = player.dataStatistic.kills.sum || 0
      deaths = player.dataStatistic.deaths.sum || 0
      assists = player.dataStatistic.assists.sum || 0
    }

    const avgKills = (win + lose) > 0 ? (kills / (win + lose)) : 0    // 平均击杀
    const kda = deaths > 0 ? ((kills + assists) / deaths) : 0         // KDA
    let winRate =  (win + lose) > 0 ? (win * 100 / (win + lose)) : 0  // 胜率
    winRate = `${winRate.toFixed(2)  }%`

    recentGames = player.recentMatches || []
    recentGames = recentGames.slice(0,5)
    
    mostUseHero = player.heroes || []
    mostUseHero = mostUseHero.slice(0,5)

    return (
      <View style={styles.slider1}>
        <SpaceBlank title="概览" />
        <View style={styles.statistic}>
          <StatisticItem title="总场次" content={win + lose} />
          <StatisticItem title="场均击杀" content={avgKills.toFixed(2)} />
          <StatisticItem title={kda.toFixed(2)} content="KDA" />
          <StatisticItem title={winRate} content="胜率" />
        </View>
        <SpaceBlank title="最近比赛" />
        <GameLists games={recentGames}/>
        <SpaceBlank title="常用英雄" />
        <GameHeroList games={mostUseHero}/>
        <SpaceBlank title="雷达图" />
        <Radar />
        <SpaceBlank title="比赛统计" />
        <View style={styles.winRate}>
          <View style={styles.winRateItem}>
            <View style={styles.winRateItemLeft}>
              <Text>Normal</Text>
              <Text style={styles.sumText}>1500</Text>
            </View>
            <View style={styles.winRateItemRight} />
          </View>
          <View style={styles.winRateItem}>
            <View style={styles.winRateItemLeft}>
              <Text>Height</Text>
              <Text style={styles.sumText}>1500</Text>
            </View>
            <View style={styles.winRateItemRight} />
          </View>
          <View style={styles.winRateItem}>
            <View style={styles.winRateItemLeft}>
              <Text>Very Height</Text>
              <Text style={styles.sumText}>1500</Text>
            </View>
            <View style={styles.winRateItemRight} />
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  slider1:{
    paddingBottom:40,
  },
  statistic:{
    backgroundColor:"#fff",
    flexDirection:"row",
    borderColor:"#e0e0e0",
    borderWidth:0.5,
  },
  statisticItem:{
    flex:1,
    height:fullWidth / 4 - 30,
    borderColor:"#e0e0e0",
    borderRightWidth:0.5,
    justifyContent:'center',
    alignItems:"center"
  },
  winRateItem:{
    flexDirection:"row",
    height:50,
  },
  sumText:{
    fontSize:13,
    color:"#666"
  },
  winRateItemLeft:{
    justifyContent:"center",
    alignItems:"center",
    paddingHorizontal:15,
    width:150
  },
  winRateItemRight:{
    
  }
})

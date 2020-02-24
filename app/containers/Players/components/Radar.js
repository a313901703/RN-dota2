import React, { Component } from 'react'
import { View } from 'react-native'
import {Echarts} from 'react-native-secharts'

export default class Radar extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    const option = {
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        x: 'center',
        data:['综合','KDA','发育','推进','生存','输出']
      },
      radar: [
        {
          indicator: [
            {text: '综合', max: 100},
            {text: 'KDA', max: 100},
            {text: '发育', max: 100},
            {text: '推进', max: 100},
            {text: '生存', max: 100},
            {text: '输出', max: 100}
          ],
          // center: ['25%','40%'],
          radius: 80
        }
      ],
      series: [
        {
          type: 'radar',
          tooltip: {
            show:false  
          },
          lineStyle:{
            color:"#B8D3E4"
          },
          itemStyle:{
              color:"#B8D3E4"  
          },
          areaStyle: {
            normal: {
              opacity: 0.9,
              color: '#B8D3E4'
            }
          },
          // itemStyle: {normal: {areaStyle: {type: '#B8D3E4'}}},
          data: [
            {
              value: [60,73,85,40,50,50],
            }
          ]
        }
      ]
    }
    return (
      <View>
        <Echarts option={option} height={250} />
      </View>
    )
  }
}

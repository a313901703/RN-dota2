import React, { Component } from 'react'
import { StyleSheet,View, Text } from 'react-native'
import {Echarts} from 'react-native-secharts'
import { Tabs } from '@ant-design/react-native'

const option = {
  legend: {
      data: []
  },
  grid: [{
    top:10,
    bottom:0,
    left: '10%',
    containLabel: true,
    width:'30%',
  },{
    top:10,
    bottom:0,
    right: '10%',
    containLabel: true,
    width:'30%',
  }],
  xAxis: [{
    type: 'value',
    boundaryGap: [0, 0.01],
    gridIndex:0,
    inverse:true,
    axisLine:{
        show:false,
    },
    axisLabel:{
        show:false
    },
    splitLine:{
        show:false,
    },
    axisTick:{
        show:false
    }
  },
  {
    type: 'value',
    boundaryGap: [0, 0.01],
    gridIndex:1,
    axisLine:{
      show:false,
    },
    axisLabel:{
      show:false,
    },
    splitLine:{
        show:false,
    },
    axisTick:{
        show:false
    }
  }],
  yAxis: [{
    type: 'category',
    data: [],
    gridIndex:0,
    inverse:true,
    axisLine:{
        show:false,
    },
    position:"right",
    axisLabel:{
        show:true,
        formatter:(v)=>`{${v}|}`,
        rich: {
          
        },
    },
    axisTick:{
        show:false
    }
  },{
    type: 'category',
    data: [],
    gridIndex:1,
    inverse:true,
    axisLine:{
      show:false,
    },
    axisLabel:{
      show:true,
      formatter:(v)=>`{${v}|}`,
      rich: {
       
      },
    },
    axisTick:{
      show:false
    }
  }],
  series: [
    {
      itemStyle:{
        normal: {
          color:'#009928',
        }
      },
      barWidth:10,
      name: '2011年',
      type: 'bar',
      data: [],
      xAxisIndex:0,
      yAxisIndex:0,
      label: {
        normal: {
          show: true,
          position: 'left',
          formatter: "{c}%"
        },
      },
  },
    {
      itemStyle:{
        normal: {
          color:'#a62217',
        }
      },
      barWidth:10,
      name: '2011年',
      type: 'bar',
      data: [],
      xAxisIndex:1,
      yAxisIndex:1,
      label: {
        normal: {
          show: true,
          position: 'right',
          formatter: "{c}%"
        },
      },
    }
  ]
}

const tabs = [
  { title: '输出率' },
  { title: '参战率' },
  { title: '输出参战比' }
]

export default class Chart extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    const {statistic} = this.props
    if (!statistic || !statistic.radiant || !statistic.dire) {
      return <View />
    }
    const damageOption = JSON.parse(JSON.stringify(option))
    const fightOption = JSON.parse(JSON.stringify(option))
    const dgOption = JSON.parse(JSON.stringify(option))
    const teamArray = ['radiant','dire']
    const dataObj = [
      {key:'dpsRate',value:damageOption},
      {key:'fightRate',value:fightOption},
      {key:'dgRate',value:dgOption},
    ]
    dataObj.forEach((d)=>{
      const dataGroup = d.key
      const dataOption = d.value
      teamArray.forEach((v,i) => {
        statistic[v][dataGroup].map((value)=>{
          dataOption.series[i].data.push(value[dataGroup])
          dataOption.yAxis[i].data.push(value.name)
          dataOption.yAxis[i].axisLabel.rich[value.name] = {
            backgroundColor: {
              image: value.thumb
            },
            height:20,
          }
          dataOption.yAxis[i].axisLabel.formatter = (val)=>`{${val}|}`
          if (dataGroup === 'dgRate') {
            dataOption.series[i].label.normal.formatter = "{c}"
          }
          return ''
        })
      })
    })
    
    return (
      <View style={styles.container}>
        <Tabs tabs={tabs} tabBarUnderlineStyle={{backgroundColor:"#aaa"}}>
        <Echarts option={damageOption} height={160} />
        <Echarts option={fightOption} height={160} />
        <Echarts option={dgOption} height={160} />
        </Tabs>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#fff',
    marginTop:20
  }
})

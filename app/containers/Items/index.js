import React, { Component } from 'react'
import { StyleSheet,View, Text,Image } from 'react-native'
import { getLists } from "@api/items"
import {ListView,Progress } from '@ant-design/react-native'

const itemHeaders = [
  {
    dataIndex:"cn_name",
    title:"名称",
    width:"40%",
    render:(v)=><View style={{flexDirection: 'row'}}>
          <Image source={{uri:v.thumb}} style={{marginRight:5,width:30,height:30}}/>
          <View style={{height:"100%",justifyContent:"center"}}><Text>{v.cn_name}</Text></View>
        </View>,
    itemStyle:{
      alignItems: 'flex-start',
      paddingLeft:10,
    }
  },
  {
    dataIndex:"cost",
    title:"胜率",
    render:()=><View   style={{width:"100%"}}>
        <Text style={{color:"#555",fontSize:13}}>50%</Text>
        <Progress percent={50} position="normal" unfilled style={{width:"100%"}} barStyle={{borderColor:"#333366"}}/>
      </View>,
    headerStyle:{
      alignItems: 'flex-start',
    }
  },
  {
    dataIndex:"cost",
    title:"场次",
    width:60,
    render:()=><View><Text>5W</Text></View>,
    headerStyle:{
      alignItems: 'flex-end',
      paddingRight:15
    },
    itemStyle:{
      alignItems: 'flex-end',
      paddingRight:15
    }
  }
]

export default class index extends Component {
  static navigationOptions = {
    title: '物品',
  }

  constructor(props) {
    super(props)
    this.state = {
    }
  }

  renderItem=(d,k)=>{
    const tbodyItem = itemHeaders.map(h => {
      let v = null
      if (typeof(h.render) === 'function') {
        v = h.render(d,k)
      }else{
        v = <Text style={[{color:"#555"},h.itemTextStyle || {}]}>{d[h.dataIndex]}</Text>
      }
      return <View key={h.title} style={[styles.tbodyItem,h.itemStyle || {},h.width ? {width:h.width} : {flex:1}]}>{v}</View>
    })
    return <View style={styles.tbody} key={d.id}>{tbodyItem}</View>
  }

  renderTHeader = () =>{
    const headerDom = itemHeaders.map((v)=><View style={[styles.headerItem,v.headerStyle || {},v.width ? {width:v.width} : {flex:1}]} key={v.title}>
        <Text style={[{color:"#888"},v.textStyle || {}]}>{v.title}</Text>
        </View>)
    return <View style={styles.theader}>
      {headerDom}
    </View>
  }

  onFetch = async (
    page = 1,
    startFetch,
    abortFetch
  ) => {
    try {
      const pageLimit = 20
      let rowData = []
      try{
        const res = await getLists({page,pageSize:pageLimit})
        rowData = res.items || []
      }catch{
        console.log('request match error')
      }

      startFetch(rowData, pageLimit)
    } catch (err) {
      console.log('catch error',err)
      abortFetch() // manually stop the refresh or pagination if it encounters network error
    }
  };

  render() {
    return (
      <ListView
        onFetch={this.onFetch}
        keyExtractor={(item, i) =>
          `${item} - ${i}`
        }
        header={()=>this.renderTHeader()}
        renderItem={(item,i) => this.renderItem(item,i)}
      />
    )
  }
}

const styles = StyleSheet.create({
  theader:{
    flexDirection:"row",
    paddingHorizontal:10,
  },
  tbody:{
    flexDirection:"row",
    paddingHorizontal:10,
  },
  headerItem:{
    justifyContent: 'center',
    alignItems:"center",
    height:40,
    borderBottomColor:"#ccc",
    borderBottomWidth:0.5,
  },
  tbodyItem:{
    justifyContent: 'center',
    alignItems:"center",
    height:40,
    borderBottomColor:"#ccc",
    borderBottomWidth:0.5,
  }
})


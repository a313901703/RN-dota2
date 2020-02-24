import React, { Component } from 'react';
import { StyleSheet,View, Text,Image } from 'react-native';
import {ListView } from '@ant-design/react-native'

export default class ScrollTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  renderItem(d,k){
    const {headers} = this.props
    const _tbodyItem = headers.map(h => {
      let _v = null
      if (typeof(h.render) === 'function') {
        _v = h.render(d,k)
      }else{
        _v = <Text style={[{color:"#555"},h.itemTextStyle || {}]}>{d[h.dataIndex]}</Text>
      }
      return <View style={[styles.tbodyItem,h.itemStyle || {},h.width ? {width:h.width} : {flex:1}]}>{_v}</View>
    })
    return <View style={styles.tbody} key={d.team_id}>{_tbodyItem}</View>
  }

  renderTHeader(){
    const {headers} = this.props
    const headerDom = headers.map((v)=>{
      return <View style={[styles.headerItem,v.headerStyle || {},v.width ? {width:v.width} : {flex:1}]} key={v.title}>
        <Text style={[{color:"#888"},v.textStyle || {}]}>{v.title}</Text>
        </View>
    })
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
      const {funName} = this.props
      const pageLimit = this.props.pageSize || 20
      let rowData = []
      try{
        const res = await funName({page,pageSize:pageLimit})
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
        keyExtractor={(item, index) =>
          `${item} - ${index}`
        }
        header={()=>this.renderTHeader()}
        renderItem={(item,index) => this.renderItem(item,index)}
      />
    );
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

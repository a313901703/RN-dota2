import React, { Component } from 'react'
import { StyleSheet,View, Text } from 'react-native'

export default class BaseTable extends Component {
  static defaultProps = {
    key:"key"
  }

  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    const headers = this.props.headers || []
    const data = this.props.data || []
    const headerDom = headers.map((v)=><View style={[styles.headerItem,v.headerStyle || {},v.width ? {width:v.width} : {flex:1}]} key={v.title}>
        <Text style={[{color:"#888"},v.textStyle || {}]}>{v.title}</Text>
        </View>)

    const dataDom = data.map((d,k)=>{
      const key = this.props
      const keyV = d[key]
      const tbodyItem = headers.map(h => {
        let v = null
        if (typeof(h.render) === 'function') {
          v = h.render(d,k)
        }else{
          v = <Text style={[{color:"#555"},h.itemTextStyle || {}]}>{d[h.dataIndex]}</Text>
        }
        return <View style={[styles.tbodyItem,h.itemStyle || {},h.width ? {width:h.width} : {flex:1}]}>{v}</View>
      })
      return <View style={styles.tbody} key={keyV}>{tbodyItem}</View>
    })

    return (
      <View>
        <View style={styles.table}>
          <View style={styles.theader}>
            {headerDom}
          </View>
          <View >
            {dataDom}
          </View>
        </View>
      </View>
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

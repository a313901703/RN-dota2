import React, { Component } from 'react'
import { StyleSheet , View, Text,Image} from 'react-native'
import { ListView,Icon } from '@ant-design/react-native'
import SpaceBlank from "../../components/SpaceBlank"

const ladderHeaders = [
  {
    title:"排序",
    width:60,
    render:(v,k)=><View ><Text>{k + 1}</Text></View>,
    // itemStyle:{
    //   alignItems: 'flex-start',
    //   paddingLeft:10,
    // }
  },
  {
    dataIndex:"name",
    title:"姓名",
    render:(v)=><View style={{flexDirection: 'row'}}>
          <Image source={{uri:v.thumb}} style={{marginRight:5,width:30,height:30}}/>
          <View style={{height:"100%",justifyContent:"center"}}><Text>{v.name}</Text></View>
        </View>,
    itemStyle:{
      alignItems: 'flex-start',
      paddingLeft:10,
    }
  },
  {
    title:"奖章",
    width:60,
    render:()=><View >
        <Image source={require('../../images/cfrs.png')} style={{marginRight:5,width:30,height:30}}/>
      </View>,
    itemStyle:{
      alignItems: 'center',
      justifyContent:"center"
    }
  },
  {
    title:"",
    width:60,
    render:()=><View style={styles.more}>
      <Text><Icon name="right" color="#bbb"/></Text>
    </View>,
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


export default class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
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
        // const res = await getLists({page,pageSize:pageLimit})
        // rowData = res.items || []
        const itemData = {
          'name':"abed",
          'thumb':"https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/b9/b92793127bfa6ceb1edbd2b7b25011b1dc6db89e.jpg",
        }
        rowData = Array.from({length: pageLimit}, () => itemData)
      }catch{
        console.log('request match error')
      }
      startFetch(rowData, pageLimit)
    } catch (err) {
      console.log('catch error',err)
      abortFetch() // manually stop the refresh or pagination if it encounters network error
    }
  };

  renderItem = (d,k) => {
    const tbodyItem = ladderHeaders.map(h => {
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

  renderTHeader = ()=>{
    const headerDom = ladderHeaders.map((v)=><View style={[styles.headerItem,v.headerStyle || {},v.width ? {width:v.width} : {flex:1}]} key={v.title}>
        <Text style={[{color:"#888"},v.textStyle || {}]}>{v.title}</Text>
        </View>)
    return <View style={styles.theader}>
      {headerDom}
    </View>
  }

  render() {
    return (
      <View style={styles.container}>
        <SpaceBlank title="今日数据" />
        <ListView
          onFetch={this.onFetch}
          keyExtractor={(item, index) =>
            `${item} - ${index}`
          }
          header={()=>this.renderTHeader()}
          renderItem={(item,index) => this.renderItem(item,index)}
        />
      </View>
      
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:"#fff"
  },
  theader:{
    flexDirection:"row",
  },
  tbody:{
    flexDirection:"row",
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
  },
  itemImg:{
    width:50,
    height:25
  }
})

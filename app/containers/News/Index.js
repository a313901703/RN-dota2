import React, { Component } from 'react'
import { StyleSheet,View, Text,Image ,ImageBackground,Dimensions} from 'react-native'
import { ListView , Icon} from '@ant-design/react-native'
import { getList } from "@api/news"
import SpaceBlank from "../../components/SpaceBlank"


const fullWidth = Dimensions.get('window').width

export default class Index extends Component {
  static navigationOptions = {
    header: '新闻',
    tabBarLabel: '新闻',
    headerTintColor:"#000",
    headerBackground:"#000",
    headerTitleStyle:{backgroundColor:"#333"},
    tabBarIcon: ({ focused, tintColor }) => (
      <Image
        style={[styles.icon, { tintColor: focused ? tintColor : 'gray' }]}
        source={require('../../images/person.png')}
      />
    ),
  }

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
      const pageSize = 10
      let rowData = []
      try{
        const response = await getList(page,pageSize)
        rowData = response.items
        if (rowData.length > 0) {
          rowData[0].important = true
        }
      }catch{
        console.log('request news error')
      }
      startFetch(rowData, pageSize)
    } catch (err) {
      console.log('catch error',err)
      abortFetch() // manually stop the refresh or pagination if it encounters network error
    }
  };

  renderHeader = () => <SpaceBlank title="新闻"/>

  renderImportantItem = (d) => <ImageBackground source={{uri:d.thumb}} style={styles.newsImportant}>
    <View style={styles.newsImportantTitle}>
      <Text style={{color:"#fff"}} numberOfLines={2}>{d.title}</Text>
    </View>
  </ImageBackground>

  renderNormalItem = (d) => <View style={styles.newsNormal}>
  <Image style={styles.newsImgStyle} source={{uri:d.thumb}} />
  <View style={{paddingLeft:15,flex:1}}>
    <View style={styles.newsTitle}><Text style={styles.newsTitleText} numberOfLines={2}>{d.title}</Text></View>
    {/* <View style={styles.newsContent}><Text style={styles.newsContentText} >{d.content}</Text></View> */}
    <View style={styles.newsInfo}>
      <Text style={styles.newsInfoText}>{d.date}</Text>
      <View style={{flexDirection:"row"}}>
        <View style={{paddingTop:2}}><Icon name="eye" size={15} color="#555"/></View>
        <Text style={styles.newsInfoText}> 1500</Text>
      </View>
    </View>
  </View>
</View>

  renderItem = (d) => {
    if (d.important) {
      return this.renderImportantItem(d)
    }
      return this.renderNormalItem(d)
  }

  render() {
    return (
      <View style={styles.container}>
        <ListView
          onFetch={this.onFetch}
          keyExtractor={(item, index) =>
            `${item} - ${index}`
          }
          header={()=>this.renderHeader()}
          renderItem={(item) => this.renderItem(item)}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:"#fff",
    flex:1
  },
  icon: {
    width: 32,
    height: 32,
  },
  newsNormal:{
    flexDirection:"row",
    padding:15,
    width:fullWidth,
    borderBottomColor:"#ccc",
    borderBottomWidth:0.5
  },
  newsImgStyle:{
    width:100,
    height:60,
  },
  newsTitle:{
    marginBottom:10
  },
  newsTitleText:{
    fontWeight:"bold",
  },
  newsContent:{
    marginBottom:10
  },
  newsContentText:{

  },
  newsInfo:{
    alignItems:"center",
    flexDirection:"row",
    justifyContent:"space-between",
  },
  newsInfoText:{
    color:"#555"
  },

  newsImportant:{
    width:fullWidth,
    height:150,
  },
  newsImportantTitle:{
    // justifyContent:"center",
    // alignItems:"center",
    width:fullWidth * 0.8,
    position:"absolute",
    bottom:25,
    left:"10%"
  }
})

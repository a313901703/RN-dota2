import React, { Component } from 'react'
import { View, Text ,Image,ScrollView,Dimensions,StyleSheet} from 'react-native'
import { connect } from 'react-redux'
import { ActivityIndicator } from '@ant-design/react-native'
import BaseTable from '../../components/BaseTable'

const fullHeight = Dimensions.get('window').height

@connect(({ teams }) => ({
  teams
}))
export default class Index extends Component {
  static navigationOptions = {
    title: '职业战队',
  }

  constructor(props) {
    super(props)
    this.state = {
    }
  }

  componentDidMount(){
    const { dispatch } = this.props
    dispatch({
      type:"teams/fetch",
      payload:{
        pageSize:100
      }
    })
  }

  render() {
    const headers = [
      {
        title:"排名",
        render:(v,k)=><View><Text>{k+1}</Text></View>,
        width:30,
      },
      {
        dataIndex:"name",
        title:"战队",
        render:(v)=><View style={{flexDirection: 'row'}}>
              <Image source={{uri:v.logo_url}} style={{marginRight:5,width:30,height:30}}/>
              <View style={{height:"100%",justifyContent:"center"}}><Text>{v.name}</Text></View>
            </View>,
        itemStyle:{
          alignItems: 'flex-start',
          paddingLeft:10,
        }
      },
      {
        dataIndex:"rating",
        title:"MMR",
      }
    ]

    const data = this.props.teams.data || []

    return (
      <View style={styles.continer}>
        <ActivityIndicator
          animating={data.length <= 0}
          toast
          size="large"
          text="Loading..."
        />
        <ScrollView
          alwaysBounceVertical={false}
          disableScrollViewPanResponder
          refreshControl={false}
          showsVerticalScrollIndicator={false}
          bounces={false}
          >
        <BaseTable headers={headers} data={data} key="team_id"/>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  continer:{
    minHeight:fullHeight,
    backgroundColor:"#fff",
  }
})

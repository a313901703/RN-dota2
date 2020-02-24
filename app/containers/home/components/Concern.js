import React, { Component } from 'react'
import { View,Text,ScrollView,Dimensions,TouchableWithoutFeedback} from 'react-native'
import { connect } from 'react-redux'
import { WhiteSpace,WingBlank,Flex } from '@ant-design/react-native'
import { NavigationActions } from '../../../utils'
import { CircleThumb } from '../../../components/Thumb'

const fullWidth = Dimensions.get('window').width
const itemWidth = (fullWidth - 90)/ 5

@connect(({ player }) => ({
  player
}))

export default class Concern extends Component {
  componentDidMount(){
    const { dispatch } = this.props
    dispatch({
      type:"player/fetchFriends",
    })
  }

  goPlayerView = (player) => {
    const {dispatch} = this.props
    if (dispatch && player) {
      dispatch(NavigationActions.navigate({ 
        routeName: 'PlayerView' ,
        params : {
          player
        }
      }))
    }
  }

  render() {
    const { friends } = this.props.player
    const itemLists = friends.map((v)=><TouchableWithoutFeedback key={v.account_id} onPress={()=>this.goPlayerView(v)}>
      <View style={styles.concernItem}  >
        <CircleThumb uri={v.avatarfull} currentStyle={styles.imgStyle}/>
        <Text style={styles.friendsName} numberOfLines={1}>{v.personaname}</Text>
      </View>
    </TouchableWithoutFeedback>)
    return (
      <View>
        <WingBlank style={{ paddingTop: 10}}>
          <View>
            <Text>我的好友</Text>
          </View>
        </WingBlank>
        <WhiteSpace size="sm"/>
        <ScrollView
            horizontal
            style={{backgroundColor:'#fff',paddingVertical:25}}
            bounces={false}
            automaticallyAdjustContentInsets={false}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
          >
          <WingBlank >
            <Flex direction="row" justify="between">
              {itemLists}
            </Flex>
          </WingBlank>
        </ScrollView>
      </View>
    )
  }
}

const styles = {
  concernItem:{
    width:itemWidth,
    height:itemWidth,
    justifyContent:"center",
    alignItems:"center",
    marginRight:15,
  },
  imgStyle:{
    width:itemWidth - 10,
    height:itemWidth - 10,
    borderRadius:(itemWidth - 10) / 2,
    marginBottom:6,
  },
  friendsName:{
    fontSize:12
  }
}

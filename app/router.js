import React, { PureComponent } from 'react'
import { BackHandler, Animated, Easing } from 'react-native'
import {
  createStackNavigator,
  createBottomTabNavigator,
  NavigationActions,
} from 'react-navigation'
import {
  reduxifyNavigator,
  createReactNavigationReduxMiddleware,
  createNavigationReducer,
} from 'react-navigation-redux-helpers'
import { connect } from 'react-redux'

import Loading from './containers/Loading'
import Login from './containers/Login'
// import Home from './containers/Home'
import Home1 from './containers/home/Index'
// import Account from './containers/Account'
import Detail from './containers/Detail'

// 数据页面
import DataPage from './containers/Matches/Index'
import GameSchedule from './containers/Matches/GameSchedule'
import News from './containers/News/Index'

// routers
import HeroNavigators from './routers/Hero'
import TeamsNavigators from './routers/Teams'
import LadderNavigators from './routers/Ladder'
import NewsNavigators from './routers/News'
import PlayerNavigators from './routers/Player'
import GameNavigators from './routers/Game'


const HomeNavigator = createBottomTabNavigator({
  // Home: { screen: Home1 },
  DataPage: { screen: DataPage},
  // News: { screen: News },
  
},{
  tabBarOptions: {
    activeTintColor: '#000',
    inactiveTintColor: 'gray',
  }
})

HomeNavigator.navigationOptions = () => 
  // const {index} = navigation.state
  
   ({
    // headerTitle: routeName,
    headerTitle:"MAX-",
    headerStyle:{backgroundColor:"#222",elevation: 1,shadowOpacity:1,borderBottomWidth: 0},
    headerTitleStyle:{color:"#fff"},
  })


const navigators = {
  HomeNavigator: { screen: HomeNavigator },
  Detail: { screen: Detail },
  GameSchedule : {screen: GameSchedule },
  ...HeroNavigators,
  ...TeamsNavigators,
  ...LadderNavigators,
  ...NewsNavigators,
  ...PlayerNavigators,
  ...GameNavigators
}
const MainNavigator = createStackNavigator(
  navigators,
  {
    headerMode: 'float',
    navigationOptions: {
      headerStyle:{backgroundColor:"#222",elevation: 1,shadowOpacity:1,borderBottomWidth: 0},
      headerTitleStyle:{color:"#fff"},
    },
  }
)

const appNavigators = {
  Main: { screen: MainNavigator },
  Login: { screen: Login },
}
const AppNavigator = createStackNavigator(
  appNavigators,
  {
    headerMode: 'none',
    mode: 'modal',
    navigationOptions: {
      gesturesEnabled: false,
      headerStyle:{backgroundColor:"#222",elevation: 1,shadowOpacity:1,borderBottomWidth: 0},
      headerTitleStyle:{color:"#fff"},
    },
    transitionConfig: () => ({
      transitionSpec: {
        duration: 300,
        easing: Easing.out(Easing.poly(4)),
        timing: Animated.timing,
      },
      screenInterpolator: sceneProps => {
        const { layout, position, scene } = sceneProps
        const { index } = scene

        const height = layout.initHeight
        const translateY = position.interpolate({
          inputRange: [index - 1, index, index + 1],
          outputRange: [height, 0, 0],
        })

        const opacity = position.interpolate({
          inputRange: [index - 1, index - 0.99, index],
          outputRange: [0, 1, 1],
        })

        return { opacity, transform: [{ translateY }] }
      },
    }),
  }
)

export const routerReducer = createNavigationReducer(AppNavigator)

export const routerMiddleware = createReactNavigationReduxMiddleware(
  'root',
  state => state.router
)

const App = reduxifyNavigator(AppNavigator, 'root')

function getActiveRouteName(navigationState) {
  if (!navigationState) {
    return null
  }
  const route = navigationState.routes[navigationState.index]
  if (route.routes) {
    return getActiveRouteName(route)
  }
  return route.routeName
}

@connect(({ app, router }) => ({ app, router }))
class Router extends PureComponent {
  componentWillMount() {
    BackHandler.addEventListener('hardwareBackPress', this.backHandle)
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.backHandle)
  }

  backHandle = () => {
    const currentScreen = getActiveRouteName(this.props.router)
    if (currentScreen === 'Login') {
      return true
    }
    if (currentScreen !== 'Home') {
      this.props.dispatch(NavigationActions.back())
      return true
    }
    return false
  }

  render() {
    const { app, dispatch, router } = this.props
    if (app.loading) return <Loading />

    return (<App dispatch={dispatch} state={router}  />)
  }
}

export default Router

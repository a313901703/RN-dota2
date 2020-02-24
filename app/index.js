import React from 'react'
import { AppRegistry } from 'react-native'

import dva from './utils/dva'
import Router, { routerMiddleware, routerReducer } from './router'
// import appModel from './models/app'
// import playerModel from './models/player'
import modelsArr from './models/index'

const app = dva({
  initialState: {},
  models: modelsArr,
  extraReducers: { router: routerReducer },
  onAction: [routerMiddleware],
  onError(e) {
    console.log('onError123', e,e.response)
    console.log( e)
    console.log(e.response)
    return Promise.reject(e) 
  },
})
app._store.dispatch({
  type:'player/fetchInfo'
})
const App = app.start(<Router />)

AppRegistry.registerComponent('app', () => App)

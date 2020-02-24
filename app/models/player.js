import { getInfo,getFriends,getGreatestHero , getView } from "../services/player"

export default {
  namespace: 'player',
  state: {
    info: {},
    friends:[],
    greatestHero:{},
    playersList : {},
    gameLists:{}
  },
  effects: {
    *fetchInfo({payload}, { call, put }) {
      const response = yield call(getInfo,payload)
      if (response) {
        yield put({ type: 'saveInfo',response })
      }
    },
    *fetchView({payload,account_id}, { call, put }) {
      const response = yield call(getView,{playerId:account_id,payload})
      if (response) {
        yield put({ type: 'savePlayer',response })
      }
    },
    *fetchFriends({payload}, { call, put }) {
      const response = yield call(getFriends,payload)
      if (response) {
        yield put({ type: 'saveFriends',response })
      }
    },
    *fetchGreatestHero({payload}, { call, put }) {
      const response = yield call(getGreatestHero,payload)
      if (response) {
        yield put({ type: 'saveGreatestHero',response })
      }
    },
    *fetchGames({payload}, { call, put }) {
      const response = yield call(getGreatestHero,payload)
      if (response) {
        yield put({ type: 'saveGreatestHero',response })
      }
    },
  },
  reducers: {
    saveInfo(state, action) {
      return {
        ...state,
        info: action.response,
      }
    },
    saveFriends(state, action) {
      return {
        ...state,
        friends: action.response,
      }
    },
    saveGreatestHero(state, action) {
      return {
        ...state,
        greatestHero: action.response,
      }
    },
    savePlayer(state,action) {
      const player = action.response
      const {playersList} = state
      playersList[player.account_id] = {...(playersList[player.account_id] || {}),...player}
      return {
        ...state,
        playersList,
      }
    }
  },
}
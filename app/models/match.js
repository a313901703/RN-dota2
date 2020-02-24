import {getView } from "../services/leagues"

export default {
  namespace: 'match',
  state: {
    games: {},
  },
  effects: {
    *fetchGame({payload}, { call, put }) {
      const response = yield call(getView,payload)
      if (response) {
        yield put({ type: 'saveInfo',response })
      }
    }
  },
  reducers: {
    saveInfo(state, action) {
      const {match_id} = action.response
      const {games} = state
      games[match_id] = action.response
      return {
        ...state,
        games,
      }
    }
  }
}
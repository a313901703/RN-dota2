import { getTeams } from "../services/teams"

export default {
  namespace: 'teams',
  state: {
    data: [],
    infos:{}
  },
  effects: {
    *fetch({payload}, { call, put }) {
      const response = yield call(getTeams,payload)
      if (response) {
        yield put({ type: 'saveData',response })
      }
    },
    // *fetchInfo({payload}, { call, put }) {
    //   const response = yield call(getInfo,payload)
    //   if (response) {
    //     yield put({ type: 'saveInfo',response })
    //   }
    // }
  },
  reducers: {
    saveData(state, action) {
      return {
        ...state,
        data: action.response.items || [],
      }
    }
  }
}
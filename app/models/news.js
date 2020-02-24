import { getList } from "../services/news"

export default {
  namespace: 'news',
  state: {
    data: [],
    infos:{}
  },
  effects: {
    *fetch({payload}, { _, put }) {
      if (payload.items) {
        if (payload.page && payload.page > 1) {
          yield put({ type: 'mergeData',items:payload.items })
        }else{
          yield put({ type: 'saveData',items:payload.items })
        }
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
        data: action.items || [],
      }
    },
    mergeData(state, action) {
      return {
        ...state,
        data: state.data.concat(action.items || []),
      }
    },
  }
}
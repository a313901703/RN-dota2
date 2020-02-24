import request from '../utils/request'

export function getList(page = 1,pagesize = 15) {
  return request('/leagues', {
    method: 'GET',
    params:{
      page,
      pagesize
    }
  })
}

export function getView(params) {
  return request('/league/view', {
    method: 'GET',
    params
  })
}

export function getMatchChartData(id) {
  return request('/league/match-chart-data', {
    method: 'GET',
    params:{
      id,
    }
  })
}
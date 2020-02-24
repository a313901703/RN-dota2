import request from '../utils/request'

export function getLists(page = 1,pageSize = 15) {
  return request('/heroes', {
    method: 'GET',
    params:{
      page,
      pageSize
    }
  })
}

export function getView(heroId) {
  return request(`/heroes/${heroId}`, {
    method: 'GET',
  })
}
import request from '../utils/request'

export function getLists(params) {
  return request('/items', {
    method: 'GET',
    params
  })
}
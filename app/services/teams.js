import request from '../utils/request'

export function getTeams(params = {}) {
  return request('/teams', {
    method: 'GET',
    params
  })
}
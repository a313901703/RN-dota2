import request from '../utils/request'

export function getList(page = 1,pagesize = 15) {
  return request('/news', {
    method: 'GET',
    params:{
      page,
      pagesize
    }
  })
}
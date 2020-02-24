import request from '../utils/request'

export function getMatches() {
  const playerId = 155948900
  // const playerId = 137936544
  return request('/player/matches', {
    method: 'POST',
    params: {
      player_id:playerId
    },
  })
}

export function getInfo() {
  const playerId = '155948900'
  // const playerId = 137936544
  return request('/player/info', {
    method: 'get',
    params: {
      playerId
    },
  })
}

export function getFriends() {
  const playerId = '155948900'
  return request('/player/friends', {
    method: 'get',
    params: {
      playerId
    },
  })
}

export function getGreatestHero() {
  const playerId = 155948900
  return request('/player/greatest-hero', {
    method: 'get',
    params: {
      playerId
    },
  })
}

export function getView(params) {
  return request(`/players/${  params.playerId}`, {
    method: 'get',
    params:params.payload
  })
}

import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: '/dictionary',
    method: 'get',
    params: query
  })
}

export function fetchArticle(id) {
  return request({
    url: '/dictionary',
    method: 'get',
    params: { id }
  })
}

export function fetchPv(pv) {
  return request({
    url: '/dictionary',
    method: 'get',
    params: { pv }
  })
}

export function createArticle(data) {
  return request({
    url: '/dictionary',
    method: 'post',
    data
  })
}

export function updateArticle(data) {
  return request({
    url: '/dictionary',
    method: 'put',
    data
  })
}

export function deleteUser(id) {
  return request({
    url: '/dictionary/delete',
    method: 'post',
    params: { id }
  })
}

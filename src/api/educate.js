import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: '/educate',
    method: 'get',
    params: query
  })
}

export function fetchArticle(id) {
  return request({
    url: '/educate',
    method: 'get',
    params: { id }
  })
}

export function fetchPv(pv) {
  return request({
    url: 'educate',
    method: 'get',
    params: { pv }
  })
}

export function createArticle(data) {
  return request({
    url: '/educate',
    method: 'post',
    data
  })
}

export function updateArticle(data) {
  return request({
    url: '/educate',
    method: 'put',
    data
  })
}

export function deleteUser(id) {
  return request({
    url: '/educate/delete',
    method: 'post',
    params: { id }
  })
}

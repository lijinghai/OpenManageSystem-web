import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: '/major',
    method: 'get',
    params: query
  })
}

export function fetchArticle(id) {
  return request({
    url: '/major',
    method: 'get',
    params: { id }
  })
}

export function fetchPv(pv) {
  return request({
    url: '/major',
    method: 'get',
    params: { pv }
  })
}

export function createArticle(data) {
  return request({
    url: '/major',
    method: 'post',
    data
  })
}

export function updateArticle(data) {
  return request({
    url: '/major',
    method: 'put',
    data
  })
}

export function deleteUser(id) {
  return request({
    url: '/major/delete',
    method: 'post',
    params: { id }
  })
}

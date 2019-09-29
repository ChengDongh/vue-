/**
 * Created by Administrator on 2019/9/25/025.
 */
import request from '@/utils/request'

export function get(url,params) {
    return request({
      url:url,
      method:'get',
      params:params.params
    })
}

export function post(url,data) {
  return request({
    url:url,
    method:'post',
    data
  })
}


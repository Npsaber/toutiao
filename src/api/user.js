// 用户相关请求模块
import request from '@/utils/request'

export const login = () => {
  return request({
    method: 'POST',
    url: '/app/v1_0/authorizations',
    data: 'data'
  })
}

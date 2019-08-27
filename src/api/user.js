import ajaxRequest from '@/libs/ajaxRequest'
import { password as md5 } from '@/libs/password'

export const login = ({ userName, password }) => {
  const reqParams = {
    txnBodyCom: {
      loginno: userName,
      password: md5(password)
    }
  }
  return ajaxRequest('post', 'gsp/gld01011', reqParams)
}

export const getUserInfo = (token) => {
  const reqParams = {
    txnBodyCom: {

    }
  }
  return ajaxRequest('post', 'gsp/gld01013', reqParams)
}

export const logout = (token) => {
  return ajaxRequest('post', 'gsp/gld01012')
}

export const getMenuTreeList = (reqParams) => {
  return ajaxRequest('post', 'gsp/gld01009', reqParams)
}

export const getUnreadCount = () => {
  return ajaxRequest('get', 'message/count')
  /* return axios.request({
    url: 'message/count',
    method: 'get'
  }) */
}

export const getMessage = () => {
  return ajaxRequest('get', 'message/init')
  /* return axios.request({
    url: 'message/init',
    method: 'get'
  }) */
}

export const getContentByMsgId = msg_id => {
  return ajaxRequest('get', 'message/content', { msg_id })
  /* return axios.request({
    url: 'message/content',
    method: 'get',
    params: {
      msg_id
    }
  }) */
}

export const hasRead = msg_id => {
  return ajaxRequest('post', 'message/has_read', { msg_id })
  /* return axios.request({
    url: 'message/has_read',
    method: 'post',
    data: {
      msg_id
    }
  }) */
}

export const removeReaded = msg_id => {
  return ajaxRequest('post', 'message/remove_readed', { msg_id })
  /* return axios.request({
    url: 'message/remove_readed',
    method: 'post',
    data: {
      msg_id
    }
  }) */
}

export const restoreTrash = msg_id => {
  return ajaxRequest('post', 'message/restore', { msg_id })
  /* return axios.request({
    url: 'message/restore',
    method: 'post',
    data: {
      msg_id
    }
  }) */
}

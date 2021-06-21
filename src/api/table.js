import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/vue-admin-template/table/list',
    method: 'get',
    params
  })
}

export function uploadFileExcel(data) {
  return request({
    url: '/api/updateSmailFile',
    method: 'post',
    data
    // baseURL: 'http://127.0.0.1:7001'
    // onUploadProgress: progress => {
    //   this.uploadProgress = Number(((progress.loaded / progress.total) * 100).toFixed(2))
    // }
  })
}


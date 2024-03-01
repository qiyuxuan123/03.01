import http from 'wechat-http'

http.baseURL = 'https://api.aslegou.top'

// 请求拦截器
http.intercept.request = (options) => {
  // 合并头信息
  options.header = {
    // 权限认证
    Authorization: 'Bearer token'
      // 默认头信息
  }
  // 拦截器处理后的请求参数
  return options
}

// 响应拦截器
http.intercept.response = (result) => {
  // console.log(result.statusCode) // http 响应状态码
  // console.log(result.config) // 发起请求时的参数
  // 拦截器处理后的响应结果
  return result.data
}

// 作为模块导出
export default http

// 也可挂载到 wx 全局命名空间
wx.http = http
import httpClient from 'axios'

httpClient.defaults.headers = {
  "X-Requested-With": "XMLHttpRequest",
  "FrontBackSepration": true,
  // "Content-Type": "application/json"
};

/**
 * 封装请求方法
 * @params(url)
 * @params(data)
 * returns { Promise }
 * @user NIGangJun <nigangjun@aeotrade.com>
 */
export default function http(base, url, data = {}, type = "get", header = {}) {
  httpClient.defaults.baseURL = base;
  httpClient.interceptors.response.use(
    response => {
      return response
    },
    error => {
      if (error.response.status === 401 && error.response.data.code === 'nosso') {
        let response = error.response.request.responseURL;
      }
      return error.response
    }
  );
  type = type.toLowerCase();
  let promise;
  return new Promise((resolve, reject) => {
    if (type === 'post') {
      promise = httpClient.post(url, data, {headers: header})
    } else if (type === 'put') {
      promise = httpClient.put(url, data, {headers: header})
    } else if (type === 'delete') {
      promise = httpClient.delete(url, {data: data, headers: header})
    } else {
      promise = httpClient.get(url, {params: data, headers: header})
    }
    promise.then(response => {
      resolve(response.data);
    }).catch(error => {
      reject(error)
    })
  })
}


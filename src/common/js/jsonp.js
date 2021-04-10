import originJSONP from 'jsonp'

export default function jsonp(url, data, opts) {
  url += (url.indexOf('?') > -1 ? '&' : '?') + param(data)
  return new Promise((resolve, reject) => {
    originJSONP(url, opts, (error, data) => {
      if (!error) {
        resolve(data)
      } else {
        reject(error)
      }
    })
  })
}

export function param(data) {
  let url = ''
  for (var k in data) {
    let value = data[k] !== undefined ? data[k] : ''
    url += '&' + k + '=' + encodeURIComponent(value)
  }
  return url ? url.substring(1) : ''
}

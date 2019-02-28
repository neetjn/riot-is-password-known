import sha1 from 'js-sha1'
import { Constants } from './constants'

export function Mixin(password) {
  const hashed = sha1(password)
  const prefix = hashed.toString().slice(0, Constants.sliceSize)
  const suffix = hashed.slice(Constants.sliceSize).toUpperCase()
  return new Promise(function(resolve, reject) {
    fetch(`${Constants.apiUri}/${prefix}`)
      .then(response => {
        response.text().then(list => {
          const result = list.split('\n').find(p => p.split(':')[0] == suffix)
          resolve({
            matched: result ? true : false,
            count: result
              ? parseInt(result.split(':')[1].replace('\\r', ''))
              : 0
          })
        })
      })
      .catch(() => {
        reject()
      })
  })
}

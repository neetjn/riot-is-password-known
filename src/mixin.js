import sha1 from 'js-sha1'
import { Constants } from './constants'

export default function Mixin(password) {
    const hashed = sha1(password)
    const prefix = hashed.slice(0, Constants.slizeSize)
    const suffix = hashed.slice(Constants.sliceSize)
    return new Promise(function(resolve, reject) {
        fetch(`${Constants.apiUri}/${prefix}`)
            .then(response => {
                response.text().then(list => {
                    resolve(list.split('\n').find(p => p.split(':')[0] == suffix) ? true : false)
                })
            })
            .catch(error => {
                reject()
            })
    })
}
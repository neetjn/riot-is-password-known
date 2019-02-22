import {Constants} from './constants'

export default function Tag(opts) {
    const self = this

    if (self.root instanceof HTMLInputElement && (self.root.type == 'text' || self.root.type == 'password')) {
        self.root.addEventListener('keyup', function(e) {
            const value = self.root.value.replace(/\s/g, '')
            if (value.length > Constants.minPasswordLength) {
                self.passwordKnown(value)
                    .then(matched => {
                        self.parent.trigger('passwordKnown', matched)
                    })
                    .catch(err => {
                        self.parent.trigger('passwordKnown', false)
                    })
            }
        })
    }
}
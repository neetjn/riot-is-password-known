import { Constants } from './constants'

export function Tag(opts) {
  const self = this

  if (
    self.root instanceof HTMLInputElement &&
    (opts.type == 'text' || opts.type == 'password')
  ) {
    self.root.addEventListener('keyup', function() {
      const value = self.root.value.replace(/\s/g, '')
      if (value.length > Constants.minPasswordLength) {
        self
          .passwordKnown(value)
          .then(result => {
            self.parent.trigger('passwordKnown', result)
          })
          .catch(() => {
            self.parent.trigger('passwordKnown', false)
          })
      }
    })
  }
}

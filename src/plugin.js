import { Mixin } from './mixin'
import { Tag } from './tag'

function PasswordKnown(instance) {
  instance.mixin({ passwordKnown: Mixin })
  instance.tag('password-known', false, false, false, Tag)
}

module.exports = PasswordKnown

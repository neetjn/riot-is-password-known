import 'jest-dom/extend-expect'
import * as riot from 'riot'
import { PasswordKnown } from '../src/plugin'

// # install password known plugin
PasswordKnown(riot)

riot.tag('root', `
  <form>
    <input type="password" data-is="password-known" />
  </form>
`)

describe('Plugin', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <div id="root" />
    `
    riot.mount('root')
  })

  it('should install the mixin as intended', function() {
    expect(riot.mixin('passwordKnown')).toBeDefined()
  })
})

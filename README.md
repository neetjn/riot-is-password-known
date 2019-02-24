# riot-is-password-known

[![build](https://travis-ci.org/neetjn/riot-is-password-known.svg?branch=master)](https://travis-ci.org/neetjn/riot-is-password-known/)
[![npm version](https://badge.fury.io/js/@neetjn/riot-is-password-known.svg)](https://badge.fury.io/js/@neetjn/riot-is-password-known)
[![codecov](https://codecov.io/gh/neetjn/riot-is-password-known/branch/master/graph/badge.svg)](https://codecov.io/gh/neetjn/riot-is-password-known)

[![NPM](https://nodei.co/npm/@neetjn/riot-is-password-known.png)](https://nodei.co/npm/@neetjn/riot-is-password-known/)

### About

**riot-is-password-known** is a Riot.js plugin to check a given password against the haveibeenpwned.com api, and verify it's secure.

### Support

| Chome  | Edge | Firefox | Opera    | Safari |
|--------|------|---------|----------|--------|
| 5.0+ ✔ |  ✔   | 4.0+ ✔  | 11.50+ ✔ | 5.0+ ✔ |

*This project only supports riot.js 3, support for previous versions is not available.*

### Example

Install the plugin like so:

```js
import PasswordKnown from '@neetjn/riot-is-password-known'
import * as riot from 'riot'

PasswordKnown(riot)
```

Leverage the virtual tag using `password-known`:

```html
<component>
  <div if={!validPassword} class="danger">
    <h1>Password Known</h1>
  </div>

  <input type="password" data-is="password-known" />

  <script>
    const self = this

    self.validPassword = false
    self.on('passwordKnown', (matched) => {
        self.validPassword = !matched
        self.update()
    })
  </script>
</component>
```

### Other Examples

* TBD

### Usage

To install via Bower, simply do the following:

```bash
bower install riot-is-password-known
```

To install via NPM:

```bash
npm install @neetjn/riot-is-password-known
```

For quick start using jsdelivr:

```html
<script src="https://cdn.jsdelivr.net/gh/neetjn/riot-is-password-known/dist/riot-is-password-known.umd.js"></script>
```

### Contributors

* John Nolette (john@neetgroup.net)

Contributing guidelines are as follows,

* Any new features must include either a unit test, e2e test, or both.
    * Branches for bugs and features should be structured like so, issue-x-username.
* Before putting in a pull request, be sure to verify you've built all your changes.
* Travis will build your changes before testing and publishing, but bower pulls from this repository directly.
* Include your name and email in the contributors list.

Notes,

Be sure to run prettier using:
```sh
npm run pretty
```
Prior to committing any code changes.

---

Copyright (c) 2019 John Nolette Licensed under the MIT license.
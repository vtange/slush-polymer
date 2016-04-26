# slush-polymer

[![Build Status](https://secure.travis-ci.org/vtange/slush-polymer.png?branch=master)](https://travis-ci.org/vtange/slush-polymer) [![NPM version](https://badge-me.herokuapp.com/api/npm/slush-polymer.png)](http://badges.enytc.com/for/npm/slush-polymer)

> generate a new polymer seed element, based on https://github.com/PolymerElements/seed-element

> uses Travis CI to automatically help you generate your demo at Github Pages while you work on the master branch

## How to Use:

- Install `slush-polymer` globally:

```bash
$ npm install -g slush-polymer
```

### Usage

- Create a Github Repo for your project, via the Github website or:

```bash
$ mkdir your-new-element-name-here && cd your-new-element-name-here
```
```bash
$ git init
```

#### !!Note: I highly recommend making sure your element's name is the same as your repo's name.
- Run the generator. Enter your details.
```bash
$ slush polymer
```

### Before pushing your first changes:
- Join Travis via Github and activate Travis for your project.

See: https://travis-ci.org/getting_started

- Add your credentials to Travis so Travis can push to gh-pages on your behalf.

Go to your repo settings in Travis and add these environment variables:

GH_REF => Is the repo url without the protocol prefix, like github.com/user_name/repo_name

GH_TOKEN => A secret token you can generate from your personal settings at Github -> called a "Personal access token"

- Work and push your changes to master branch as you normally would :)

## This Generator uses Slush, more about Slush:

Slush is a tool that uses Gulp for project scaffolding.

Slush does not contain anything "out of the box", except the ability to locate installed slush generators and to run them with liftoff.

To find out more about Slush, check out the [documentation](https://github.com/slushjs/slush).

## Contributing

See the [CONTRIBUTING Guidelines](https://github.com/vtange/slush-polymer/blob/master/CONTRIBUTING.md)

## Support
If you have any problem or suggestion please open an issue [here](https://github.com/vtange/slush-polymer/issues).

## License 

The MIT License

Copyright (c) 2016, Victor Tang

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.


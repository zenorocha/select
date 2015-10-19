# select

Lightweight DOM selection.

## Install

You can get it on npm.

```
npm install select --save
```

Or bower, too.

```
bower install select --save
```

If you're not into package management, just [download a ZIP](https://github.com/zenorocha/select/archive/master.zip) file.

## Usage

### Standalone

```html
<script src="dist/select.js"></script>
```

```js
var input = document.querySelector('input');
var result = select(input);
```

### Browserify

```js
var select = require('select');
```

```js
var input = document.querySelector('input');
var result = select(input);
```

## License

[MIT License](http://zenorocha.mit-license.org/) © Zeno Rocha

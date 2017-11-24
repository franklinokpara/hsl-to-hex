
# hsl-to-hex

Convert HSL colors to RGB colors in hex format .

## Install

```sh
npm install --save @macfrankie/hsl-to-hex
```

# API

```
require('hsl-to-hex') => Function
hsl(hue, saturation, luminosity) => string
```

## Example

```js
var hsl = require('hsl-to-hex')
var hue = 140
var saturation = 60
var luminosity = 50
var hex = hsl(hue, saturation, luminosity)
console.log(hex) // #33cc66

## License

ISC
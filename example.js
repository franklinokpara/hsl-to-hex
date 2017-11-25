var hsl = require('./')
var hue = 140
var saturation = 60
var luminosity = 50
var hex = hsl(hue, saturation, luminosity)

console.log(hex) // #33cc66

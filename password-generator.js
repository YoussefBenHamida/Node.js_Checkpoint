//4 Password Generator
var generator = require('generate-password')

var password = generator.generate({
    length : 7,
    numbers:true
})

console.log(password)
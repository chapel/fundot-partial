var partial = require('../index')

var say = function (name, says) {
  return name + ' says ' + says
}

var chuckSays = partial.left(say, 'Chuck')
console.log(chuckSays('hello'))

var sayHello = partial.right(say, 'hello')
console.log(sayHello('Bob'))

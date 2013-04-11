# Fundot Partial
Partial application composer for the functional library [Fundot](https://github.com/chapel/fundot)

[![build status](https://secure.travis-ci.org/chapel/fundot-partial.png)](http://travis-ci.org/chapel/fundot-partial)

# Example

``` js
var partial = require('fundot-partial')

var say = function (name, says) {
  return name + ' says ' + says
}

var chuckSays = partial.left(say, 'Chuck')
console.log(chuckSays('hello'))

var sayHello = partial.right(say, 'hello')
console.log(sayHello('Bob'))
```

```
$ node example/partial.js
Chuck says hello
Bob says hello
```

# Methods

``` js
var partial = require('fundot-partial')
```

## partial.left(function, arguments)

Composes partial application using the function passed as the first argument. Other arguments given will be stored and placed on the left of any arguments given to the partial application returned.

## partial.right(function, arguments)

Composes partial application using the function passed as the first argument. Other arguments given will be stored and placed on the right of any arguments given to the partial application returned.

# Install

With [npm](https://npmjs.org) do:

```
npm install fundot-partial
```

# License

MIT

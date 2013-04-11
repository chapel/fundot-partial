var utils = require('fundot-utils')

exports.left = function partial(fun) {
  var args = utils.slice(arguments, 1)

  return function() {
    return fun.apply(this, args.concat(utils.toArray(arguments)))
  }
}

exports.right = function partialRight(fun) {
  var args = utils.slice(arguments, 1)

  return function() {
    return fun.apply(this, utils.toArray(arguments).concat(args))
  }
}

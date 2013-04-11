var assert  = require('assert')
  , partial = require('../index')

describe('partial', function () {
  it('should compose a partial function', function () {
    var add = function (a, b, c, d, e) {
      return a + b + c + d
    }

    var addMany = partial.left(add, 2, 3)
      , value = addMany(4, -5, 5)

    assert.equal(value, 4)
  })
})

describe('partialRight', function () {
  it('should compose a partial right function', function () {
    var add = function (a, b, c, d, e) {
      return a + b + c + d
    }

    var addMany = partial.right(add, 2, 3)
      , value = addMany(4, -5, 5)

    assert.equal(value, 6)
  })
})


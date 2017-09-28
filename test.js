const assert = require('assert')
const sinon = require('sinon')
const index = require('./index')
const runChallenge = index.runChallenge
const readText = index.readText
const findHighestValue = index.findHighestValue

describe('findHighestValue', function() {
  describe('#findHighestValue()', function() {
    it("should return the highest value from an array", function() {
      const myArray = [1, 3, 2, 0.4, 8]
      assert.equal(findHighestValue(myArray), 8)
    })
  })
})

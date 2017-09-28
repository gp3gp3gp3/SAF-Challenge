const assert = require('assert')
const index = require('./index')
const findHighestValue = index.findHighestValue

describe('findHighestValue', function() {
  describe('#findHighestValue()', function() {
    it("should return the highest value from an array", function() {
      const myArray = [1, 3, 2, 0.4, 8]
      assert.equal(findHighestValue(myArray), 8)
    })
    it("should return the highest value from an array with negative values", function() {
      const myArray = [-5.07, -0.41, 6.60, 0.27, 1.53, 0.09, 3.56, -0.12, -0.12, -1.94, 3.42, 1.82]
      assert.equal(findHighestValue(myArray), 6.60)
    })
    it("should return the highest value from an array of strings", function() {
      const myArray = ['1', '3', '2', '0.4', '8', '-2']
      assert.equal(findHighestValue(myArray), 8)
    })
  })
})

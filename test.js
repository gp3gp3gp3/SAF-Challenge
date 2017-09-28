const assert = require('assert')
const index = require('./index')
const findHighestValue = index.findHighestValue
const findPositiveReturn = index.findPositiveReturn
const convertDecimalToPercRoundDown = index.convertDecimalToPercRoundDown
const findCumlativeReturn = index.findCumlativeReturn
const convertDecimalToPercRound = index.convertDecimalToPercRound

describe('convertDecimalToPercRound', function () {
  describe('#convertDecimalToPercRound', function () {
    it('should not round down to the nearest 2 decimal', function () {
      const num = 0.09549684837180816
      assert.equal(convertDecimalToPercRound(num), 9.55)
    })

    it('should convert a decimal to a percentage number', function () {
      const num = 0.32
      assert.equal(convertDecimalToPercRoundDown(num), 32)
    })
  })
})

describe('findCumlativeReturn', function () {
  describe('#findCumlativeReturn()', function () {
    it('should find the cumlative return value (aka the geometric average)', function () {
      const myArray = [-5.07, -0.41, 6.60, 0.27, 1.53, 0.09, 3.56, -0.12, -0.12, -1.94, 3.42, 1.82]
      assert.equal(findCumlativeReturn(myArray), 9.55)
    })
  })
})

describe('convertDecimalToPercRoundDown', function () {
  describe('#convertDecimalToPercRoundDown()', function () {
    it('should round down to the nearest 2 decimal', function () {
      const num = 0.66667
      assert.equal(convertDecimalToPercRoundDown(num), 66.66)
    })
    it('should convert a decimal to a percentage number', function () {
      const num = 0.32
      assert.equal(convertDecimalToPercRoundDown(num), 32)
    })
  })
})

describe('findPositiveReturn', function () {
  describe('#findPositiveReturn()', function () {
    it('should return the percentage of returns that are positive', function () {
      const myArray = [1, 2, 4, -2, -3, -1]
      assert.equal(findPositiveReturn(myArray), 0.5)
    })
  })
})

describe('findHighestValue', function () {
  describe('#findHighestValue()', function () {
    it("should return the highest value from an array", function () {
      const myArray = [1, 3, 2, 0.4, 8]
      assert.equal(findHighestValue(myArray), 8)
    })
    it("should return the highest value from an array with negative values", function () {
      const myArray = [-5.07, -0.41, 6.60, 0.27, 1.53, 0.09, 3.56, -0.12, -0.12, -1.94, 3.42, 1.82]
      assert.equal(findHighestValue(myArray), 6.60)
    })
    it("should return the highest value from an array of strings", function () {
      const myArray = ['1', '3', '2', '0.4', '8', '-2']
      assert.equal(findHighestValue(myArray), 8)
    })
  })
})

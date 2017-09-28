var assert = require('assert')
var index = require('./index')
var runChallenge = index.runChallenge

describe('runChallenge', function() {
  describe('#runChallenge()', function() {
    it('should return string that says hello', function() {
      assert.equal(runChallenge(), 'hello')
    })
  })
})

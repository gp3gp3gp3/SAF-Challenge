const assert = require('assert')
const sinon = require('sinon')
const index = require('./index')
const runChallenge = index.runChallenge

describe('runChallenge', function() {
  describe('#runChallenge()', function() {
    it('should return string that says hello', function() {
      assert.equal(runChallenge(), 'hello')
    })

    it('should console.log hello', function() {
      let spy = sinon.spy(console, 'log')
      runChallenge()
      assert(spy.calledWith('hello'))
    })
  })
})

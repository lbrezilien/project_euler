const assert = require('assert');
const threeFiveMultiplesOf = require('./problem');

describe('threeFiveMultiplesOf', function() {
    it('should not be undefined', function() {
      assert.equal(1000, threeFiveMultiplesOf(1000));
    });
});

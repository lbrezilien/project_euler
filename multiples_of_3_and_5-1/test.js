const assert = require('assert');
const threeFiveMultiplesOf = require('./problem');

describe('threeFiveMultiplesOf', function() {
    it('should give the sum of multiples of a small number', function() {
      assert.equal(23, threeFiveMultiplesOf(10));
    });

    it('should give the sum of multiples of a large number', function() {
      assert.equal(233168, threeFiveMultiplesOf(1000));
    });
});

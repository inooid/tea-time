var expect = require('chai').should();
var dummy = require('./script.js');


describe('dummy test', function() {
    it('should be true', function() {
        dummy.should.equal(true);
    });
});
// Caculator.test.js

var Caculator = require('./Caculator.js');
var expect = require('chai').expect;

describe('加法函数的测试', function() {
  it('1 加 1 应该等于 2', function() {
    expect(Caculator.add(1, 1)).to.be.equal(2);
  });
});

describe('乘法函数的测试', function() {
  it('5 x 7 应该等于 35', function() {
    expect(Caculator.multiply(5, 7)).to.be.equal(35);
  });
});

describe('除法函数的测试', function() {
  it('9 除以 3 应该等于 3', function() {
    expect(Caculator.divide(9, 3)).to.be.equal(3);
  });
});

describe('减法函数的测试', function() {
  it('8 减 1 应该等于 7', function() {
    expect(Caculator.substract(8, 1)).to.be.equal(7);
  });
})
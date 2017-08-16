// Caculator.test.js

var add = require('./Caculator.js');
var multiply = require('./Caculator.js');
var divide = require('./Caculator.js');
var substract = require('./Caculator.js');
var expect = require('chai').expect;

describe('加法函数的测试', function() {
  it('1 加 1 应该等于 2', function() {
    expect(add(1, 1)).to.be.equal(2);
  });
});

describe('乘法函数的测试', function() {
  it('5 x 7 应该等于 35', function() {
    expect(multiply(5, 7)).to.be.equal(35);
  });
});

describe('除法函数的测试', function() {
  it('9 除以 3 应该等于 3', function() {
    expect(divide(9, 3)).to.be.equal(3);
  });
});

describe('减法函数的测试', function() {
  it('8 减 1 应该等于 7', function() {
    expect(substract(8, 1)).to.be.equal(7);
  });
})
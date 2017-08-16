// Caculator.test.js

var Caculator = require('./Ca.js');
var expect = require('chai').expect;
var data = require('./data.js');

describe('加法函数的测试', function() {
  it('1 加 1 应该等于 2', function() {
    expect(Caculator.add(data.x, data.y)).to.be.equal(data.z);
  });
});

describe('乘法函数的测试', function() {
  it('5 x 7 应该等于 35', function() {
    expect(Caculator.multiply(data.x, data.y)).to.be.equal(data.z);
  });
});

describe('除法函数的测试', function() {
  it('9 除以 3 应该等于 3', function() {
    expect(Caculator.divide(data.x, data.y)).to.be.equal(data.z);
  });
});

describe('减法函数的测试', function() {
  it('8 减 1 应该等于 7', function() {
    expect(Caculator.substract(data.x, data.y)).to.be.equal(data.z);
  });
})
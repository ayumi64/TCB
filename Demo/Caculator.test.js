// Caculator.test.js

var hahaha = require('./Caculator.js');
var expect = require('chai').expect;
var data = require('./data.js');

describe('加法函数的测试', function () {
  it('1 加 1 应该等于 2', function () {
    expect(hahaha.add(1, 1)).to.be.equal(2);
  });
});

describe('乘法函数的测试', function () {
  it('5 x 7 应该等于 35', function () {
    expect(hahaha.multiply(5, 7)).to.be.equal(35);
  });
});

describe('除法函数的测试', function () {
  it('9 除以 3 应该等于 3', function () {
    expect(hahaha.divide(9, 3)).to.be.equal(3);
  });
});

describe('减法函数的测试', function () {
  it('8 减 1 不等于 9', function () {
    expect(hahaha.substract(8, 1)).not.to.be.equal(9);
  });
})
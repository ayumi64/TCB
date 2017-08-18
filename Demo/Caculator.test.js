// Caculator.test.js

var Caculator = require('./Caculator.js');
var expect = require('chai').expect;
var data = require('./Caculator.data.js');

describe('加法函数的测试', function () {
  it('x1 加 y1 应该等于 z1', function () {
    expect(Caculator.add(data.x1, data.y1)).to.be.equal(data.z1);
  });
});

describe('乘法函数的测试', function () {
  it('x2 乘 y2 应该等于 z2', function () {
    expect(Caculator.multiply(data.x2, data.y2)).to.be.equal(data.z2);
  });
});

describe('除法函数的测试', function () {
  it('x3 除 y3 应该等于 z3', function () {
    expect(Caculator.divide(data.x3, data.y3)).to.be.equal(data.z3);
  });
});

describe('减法函数的测试', function () {
  it('x4 减 y4 应该等于 z4', function () {
    expect(Caculator.substract(data.x4, data.y4)).to.be.equal(data.z4);
  });
});
describe('减法函数的测试', function () {
  it('x5 减 y5 不应该等于 z5', function () {
    expect(Caculator.substract(data.x5, data.y5)).not.to.be.equal(data.z5);
  })
})
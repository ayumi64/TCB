// add.test.js
var add = require('./add.js');
var expect = require('chai').expect;

// 测试数据
var x1 = 1 
var y1 = 1
var r1 = 2

var x2 = 4
var y2 = 5
var r2 = 9

var x3 = 3
var y3 = 2.5
var r3 = 5.5
var wrong3 = 5
// 测试数据


describe('加法函数的测试', function() {

  it('x1 加 y2 应该等于 r1', function() {
    expect(add(x1, y1)).to.be.equal(r1);
  });

 it('x2 加 y2 应该等于 r2', function() {
    expect(add(x2, y2)).to.be.equal(r2);
  });

   it('x3 加 y3 不等于 wrong3', function() {
    expect(add(x3, y3)).to.be.not.equal(wrong3);
  });

});
const assert = require('assert')
const toRomans = require('../../../katas/kata-01-romanos/jose/index')

describe('Prueba numeros romanos', function () {

  it('1 returns I', () => assert.equal(toRomans(1), 'I'))
  it('10 returns L', () => assert.equal(toRomans(10), 'X'))
  it('20 returns XX', () => assert.equal(toRomans(20), 'XX'))
  it('50 returns CCC', () => assert.equal(toRomans(50), 'L'))
  it('100 returns CCXXII', () => assert.equal(toRomans(100), 'C'))
  it('300 returns XI', () => assert.equal(toRomans(300), 'CCC'))
  it('500 returns LXX', () => assert.equal(toRomans(500), 'D'))
  it('4 returns XL', () => assert.equal(toRomans(4), 'IV'))
  it('9 returns XLIV', ()=> assert.equal(toRomans(9), 'IX'))
  it('98 returns CCCXCIV', () => assert.equal(toRomans(98), 'XCVIII'))
  it('1043 returns XXXIX', () => assert.equal(toRomans(1043), 'MXLIII'))
  it('2425 returns XLVII', () => assert.equal(toRomans(2425), 'MMCDXXV'))
  it('3845 returns MMMMCDLVII', () => assert.equal(toRomans(3845), 'MMMDCCCXLV'))  
})

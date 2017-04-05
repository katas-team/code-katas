const assert = require('assert')
const toRomans = require('../../../katas/kata-01-romanos/rodrigo/index')

describe('arabic to romans', function () {

  it('1 returns I', () => assert.equal(toRomans(1), 'I'))
  it('50 returns L', () => assert.equal(toRomans(50), 'L'))
  it('20 returns XX', () => assert.equal(toRomans(20), 'XX'))
  it('300 returns CCC', () => assert.equal(toRomans(300), 'CCC'))
  it('222 returns CCXXII', () => assert.equal(toRomans(222), 'CCXXII'))
  it('11 returns XI', () => assert.equal(toRomans(11), 'XI'))
  it('70 returns LXX', () => assert.equal(toRomans(70), 'LXX'))
  it('40 returns XL', () => assert.equal(toRomans(40), 'XL'))
  it('44 returns XLIV', ()=> assert.equal(toRomans(44), 'XLIV'))
  it('394 returns CCCXCIV', () => assert.equal(toRomans(394), 'CCCXCIV'))
  it('39 returns XXXIX', () => assert.equal(toRomans(39), 'XXXIX'))
  it('47 returns XLVII', () => assert.equal(toRomans(47), 'XLVII'))
  it('4457 returns MMMMCDLVII', () => assert.equal(toRomans(4457), 'MMMMCDLVII'))  
})

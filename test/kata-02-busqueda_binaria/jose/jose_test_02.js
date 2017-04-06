const assert = require('assert')
const busquedaBinaria = require('../../../katas/kata-02-busqueda_binaria/jose/index')

describe('Prueba busqueda binaria UNO', function () {
  it('1 returns 1', () => assert.equal(busquedaBinaria.uno(1), 1))
  it('5 returns 3', () => assert.equal(busquedaBinaria.uno(5), 3))
  it('20 returns 5', () => assert.equal(busquedaBinaria.uno(20), 5))
  it('90 returns 9', () => assert.equal(busquedaBinaria.uno(90), 9))
  it('100 returns 10', () => assert.equal(busquedaBinaria.uno(100), 10))
  it('30 returns 0', () => assert.equal(busquedaBinaria.uno(30), 0))
})

describe('Prueba busqueda binaria DOS', function () {
  it('1 returns 1', () => assert.equal(busquedaBinaria.dos(1), 1))
  it('5 returns 3', () => assert.equal(busquedaBinaria.dos(5), 3))
  it('20 returns 5', () => assert.equal(busquedaBinaria.dos(20), 5))
  it('90 returns 9', () => assert.equal(busquedaBinaria.dos(90), 9))
  it('100 returns 10', () => assert.equal(busquedaBinaria.dos(100), 10))
  it('30 returns 0', () => assert.equal(busquedaBinaria.dos(30), 0))
})
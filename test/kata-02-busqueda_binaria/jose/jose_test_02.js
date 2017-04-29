const assert = require('assert')
const busquedaBinaria = require('../../../katas/kata-02-busqueda_binaria/jose/index')

describe('Prueba busqueda binaria: UNO - Iterativo', function () {
  it('1 returns 1', () => assert.equal(busquedaBinaria.uno(1), 1))
  it('5 returns 3', () => assert.equal(busquedaBinaria.uno(5), 3))
  it('20 returns 5', () => assert.equal(busquedaBinaria.uno(20), 5))
  it('90 returns 9', () => assert.equal(busquedaBinaria.uno(90), 9))
  it('100 returns 10', () => assert.equal(busquedaBinaria.uno(100), 10))
  it('30 returns 0', () => assert.equal(busquedaBinaria.uno(30), -1))
})

describe('Prueba busqueda binaria: DOS - Recursivo', function () {
  it('1 returns 1', () => assert.equal(busquedaBinaria.dos(1), 1))
  it('5 returns 3', () => assert.equal(busquedaBinaria.dos(5), 3))
  it('20 returns 5', () => assert.equal(busquedaBinaria.dos(20), 5))
  it('90 returns 9', () => assert.equal(busquedaBinaria.dos(90), 9))
  it('100 returns 10', () => assert.equal(busquedaBinaria.dos(100), 10))
  it('30 returns 0', () => assert.equal(busquedaBinaria.dos(30), -1))
})

describe('Prueba busqueda binaria: TRES - Promesas', function () {
  it('1 returns 1', () => assert.equal(busquedaBinaria.tres(1), 1))
  it('5 returns 3', () => assert.equal(busquedaBinaria.tres(5), 3))
  it('20 returns 5', () => assert.equal(busquedaBinaria.tres(20), 5))
  it('90 returns 9', () => assert.equal(busquedaBinaria.tres(90), 9))
  it('100 returns 10', () => assert.equal(busquedaBinaria.tres(100), 10))
  it('30 returns 0', () => assert.equal(busquedaBinaria.tres(30), -1))
})

describe('Prueba busqueda binaria: CUATRO - AsyncAwait', function () {
  it('1 returns 1', () => assert.equal(busquedaBinaria.cuatro(1), 1))
  it('5 returns 3', () => assert.equal(busquedaBinaria.cuatro(5), 3))
  it('20 returns 5', () => assert.equal(busquedaBinaria.cuatro(20), 5))
  it('90 returns 9', () => assert.equal(busquedaBinaria.cuatro(90), 9))
  it('100 returns 10', () => assert.equal(busquedaBinaria.cuatro(100), 10))
  it('30 returns 0', () => assert.equal(busquedaBinaria.cuatro(30), -1))
})
const assert = require('assert')
const busquedaBinaria = require('../../../katas/kata-02-busqueda_binaria/jose/index')

describe('Prueba busqueda binaria', function () {

  it('1 returns 1', () => assert.equal(busquedaBinaria(1), 1))
  it('20 returns 5', () => assert.equal(busquedaBinaria(20), 5))
})

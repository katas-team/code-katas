const assert = require('assert')

const iterativa = require('../../katas/kata-02-busqueda_binaria/rodrigo/iterativa')
const recursiva = require('../../katas/kata-02-busqueda_binaria/rodrigo/recursiva')

describe('rodrigo búsqueda iterativa', function () {
  it('Returns -1', () => assert.equal(-1, iterativa(3, [])))
  it('Returns -1', () => assert.equal(-1, iterativa(3, [1])))
  it('Returns 0', () => assert.equal(0,  iterativa(1, [1])))
  
  it('Returns 0', () => assert.equal(0,  iterativa(1, [1, 3, 5])))
  it('Returns 1', () => assert.equal(1,  iterativa(3, [1, 3, 5])))
  it('Returns 2', () => assert.equal(2,  iterativa(5, [1, 3, 5])))
  it('Returns -1', () => assert.equal(-1, iterativa(0, [1, 3, 5])))
  it('Returns -1', () => assert.equal(-1, iterativa(2, [1, 3, 5])))
  it('Returns -1', () => assert.equal(-1, iterativa(4, [1, 3, 5])))
  it('Returns -1', () => assert.equal(-1, iterativa(6, [1, 3, 5])))
  it('Returns 4', () => assert.equal(4, iterativa(10, [1, 3, 5, 7, 10, 20, 40])))
})

describe('rodrigo búsqueda recursiva', function () {
  it('Returns -1', () => assert.equal(-1, recursiva(3, [])))
  it('Returns -1', () => assert.equal(-1, recursiva(3, [1])))
  it('Returns 0', () => assert.equal(0, recursiva(1, [1])))

  it('Returns 0', () => assert.equal(0, recursiva(1, [1, 3, 5])))
  it('Returns 1', () => assert.equal(1, recursiva(3, [1, 3, 5])))
  it('Returns 2', () => assert.equal(2, recursiva(5, [1, 3, 5])))
  it('Returns -1', () => assert.equal(-1, recursiva(0, [1, 3, 5])))
  it('Returns -1', () => assert.equal(-1, recursiva(2, [1, 3, 5])))
  it('Returns -1', () => assert.equal(-1, recursiva(4, [1, 3, 5])))
  it('Returns -1', () => assert.equal(-1, recursiva(6, [1, 3, 5])))
  it('Returns 4', () => assert.equal(4, recursiva(10, [1, 3, 5, 7, 10, 20, 40])))
})

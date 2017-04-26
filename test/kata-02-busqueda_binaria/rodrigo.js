const assert = require('assert')

const iterativa = require('../../katas/kata-02-busqueda_binaria/rodrigo/iterativa')
const recursiva = require('../../katas/kata-02-busqueda_binaria/rodrigo/recursiva')
const promesa = require('../../katas/kata-02-busqueda_binaria/rodrigo/promesa')
const async_await = require('../../katas/kata-02-busqueda_binaria/rodrigo/async_await')

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

describe('rodrigo búsqueda promesa recursiva', function () {
  it('Returns -1', function (done) {
    promesa(3,[]).then(function (position) {
      assert.equal(-1, position)
      done()
    })
  })
  it('Returns -1', function (done) {
    promesa(3, [1]).then(function(position) {
      assert.equal(-1, position)
      done()
    })
  })
  it('Returns 0', function (done) {
    promesa(1, [1]).then(function(position) {
      assert.equal(0, position)
      done()
    })
  })

  it('Returns 0', function (done) {
    promesa(1, [1, 3, 5]).then(function (position) {
      assert.equal(0, position)
      done()
    })
  })
  it('Returns 1', function (done) {
    promesa(3, [1, 3, 5]).then(function (position) {
      assert.equal(1, position)
      done()
    })
  })
  it('Returns 2', function (done) {
    promesa(5, [1, 3, 5]).then(function (position) {
      assert.equal(2, position)
      done()
    })
  })
  it('Returns -1', function (done) {
    promesa(0, [1, 3, 5]).then(function (position) {
      assert.equal(-1, position)
      done()
    })
  })
  it('Returns -1', function (done) {
    promesa(2, [1, 3, 5]).then(function (position) {
      assert.equal(-1, position)
      done()      
    })
  })
  it('Returns -1', function (done) {
    promesa(4, [1, 3, 5]).then(function (position) {
      assert.equal(-1, position)
      done()
    })
  })
  it('Returns -1', function (done) {
    promesa(6, [1, 3, 5]).then(function (position) {
      assert.equal(-1, position)
      done()
    })
  })
  it('Returns 4', function (done) {
    promesa(10, [1, 3, 5, 7, 10, 20, 40]).then(function (position) {
      assert.equal(4, position)
      done()
    })
  })
})

describe('rodrigo búsqueda async-await', function () {
  it('Returns -1', function (done) {
    async_await(3, []).then(function (position){
      assert.equal(-1, position)
      done()
    })
  })
})
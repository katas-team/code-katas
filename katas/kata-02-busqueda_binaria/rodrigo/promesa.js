module.exports = function promesa(number, array) {
  const recursiva = require('./recursiva')

  return new Promise(function (resolve, reject) {
    var result = recursiva(number, array)

    return resolve(result)
  })
}

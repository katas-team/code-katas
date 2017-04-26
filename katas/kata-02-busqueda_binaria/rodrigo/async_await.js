async function async_await(number, array) {
  const Promesa = require('./promesa')
  
  var result = await Promesa(number, array)

  return result
}

module.exports = async_await

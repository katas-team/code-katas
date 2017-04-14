module.exports = function recursiva(number, array) {
  var last = array.length - 1
  var first = 0

  return _recursiva(number, first, last, array)
}

function _recursiva(number, first, last, array) {
  var middle = ((last - first) / 2) + first | 0

  if (number === array[middle]) return middle

  if (first === last) return -1

  if (number < array[middle]) return _recursiva(number, first, middle - 1, array)

  if (number > array[middle]) return _recursiva(number, middle + 1, last, array)

  return -1
}

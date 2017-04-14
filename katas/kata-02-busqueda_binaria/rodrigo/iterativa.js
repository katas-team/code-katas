module.exports = function iterativa (number, array) {
  var last = array.length - 1
  var first = 0

  while (first <= last) {
    let middle = ((last - first) / 2) + first | 0

    if (number === array[middle]) return middle

    if (number < array[middle]) {
      last = middle - 1
    } else {
      first = middle + 1
    }
  }

  return -1;
}

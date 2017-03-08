module.exports = function (number) {
  if (typeof number === 'number') {
    const SIMPLE_ROMANS = {
      1: 'I',
      5: 'V',
      10: 'X',
      50: 'L',
      100: 'C',
      500: 'D',
      1000: 'M'
    };

    if (SIMPLE_ROMANS[number]) return SIMPLE_ROMANS[number];

    var numbers = factorize({number: number, factors: [1000, 100, 10, 1]});

    numbers = numbers.map(function (number) {
      return SIMPLE_ROMANS[number];
    });

    return numbers.join('');
  }
};

function factorize({number, factors}) {
  const EXCEPT_ROMANS = {
    5: 'V',
    50: 'L',
    500: 'D'
  };
  const EXCEPT_FACTORS = [500, 50 , 5 , 0];
  var _number = number;
  var numbers = [];

  factors.forEach(function (factor, i, arr) {
    var loop = Math.floor(_number / factor);

    if (loop < 4 || factor === 1000) {
      for (var j = 0; j < loop; ++j) {
        numbers.push(factor);
        _number -= factor;
      }
    }

    var mod = Math.floor(_number % EXCEPT_FACTORS[i]);

    if (_number === mod && _number >= (EXCEPT_FACTORS[i] - (factor / 10))) {
      numbers.push((factor / 10), EXCEPT_FACTORS[i]);
      _number -= EXCEPT_FACTORS[i] - (factor / 10);
    }
    if (mod < _number && mod >= (EXCEPT_FACTORS[i] - (factor / 10)) && mod >= (EXCEPT_FACTORS[i] - 2 * (factor / 10))) {
      numbers.push((factor / 10), factor);
      _number -= factor - (factor / 10);
      mod = _number;
    }
    if (mod < _number) {
      numbers.push(EXCEPT_FACTORS[i]);
      _number -= EXCEPT_FACTORS[i];
    }
  });

  return numbers;
}

module.exports = function (number) {
  if (! Number.isSafeInteger(number) && number > 0) return undefined;

  const BASIC_ROMANS = {
    1: 'I',
    5: 'V',
    10: 'X',
    50: 'L',
    100: 'C',
    500: 'D',
    1000: 'M'
  };

  if (BASIC_ROMANS[number]) return BASIC_ROMANS[number];

  var numbers = factorize({ number: number, factors: [1000, 100, 10, 1] });
  
  var parts = numbers.map(function (number) {
    return BASIC_ROMANS[number];
  });

  return parts.join('');
};

function factorize({ number, factors }) {
  var half_factors = [500, 50, 5, 0];
  var numbers = [];
  var num = number;

  factors.forEach(function (factor, i) {
    var loop = Math.floor(num / factor);
    var half_factor = half_factors[i];
    var ten_percent_less = factor / 10;

    if (loop < 4 || factor === 1000) {
      for (var j = 0; j < loop; ++j) {
        numbers.push(factor);
        num -= factor;
      }
    }

    var mod = Math.floor(num % half_factor);

    if (num === mod && num >= (half_factor - ten_percent_less)) {
      numbers.push(ten_percent_less, half_factor);
      num -= half_factor - ten_percent_less;
    }

    if (mod < num) {
      if (mod >= (half_factor - (2 * ten_percent_less))) {
        numbers.push(ten_percent_less, factor);
        num -= factor - ten_percent_less;
      } else {
        numbers.push(half_factor);
        num -= half_factor;
      }
    }
  });

  return numbers;
}

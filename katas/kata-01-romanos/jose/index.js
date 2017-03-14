var n = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'];
var v = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];

alert(conv(373));

function conv(x) {
	if( x<1 || x>3999 ) {	// Un simple control de error
		return (x + ' no valido');
	}
	var y = '';
	for(i=12; i>=0; ){
		if( v[i]<=x ){	// Si el valor en el array es mas pequeño que nuestro num
			y += n[i];	// agregamos la letra romana
			x -= v[i];	// restamos su valor a nuestro num
		}else{			// EOC: siguiente valor en el array
			i--;
		}
	}
	return y;
}

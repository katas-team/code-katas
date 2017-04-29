var v = [1, 4, 5, 9, 20, 40, 50, 75, 90, 100];

var obj = {
	// Recursivamente
	uno: function(x){
		return obj.unoR(0, v.length-1, x);
	},
 	unoR: function(izq, der, x) {
		if(izq <= der){
			var m = Math.round(((der-izq)/2) + izq);
			if (x < v[m]){
				return obj.unoR(izq, m-1, x);
			} else if (x > v[m]){
				return obj.unoR(m+1, der, x);
			} else {
				return m+1;
			}
		}else{
			return -1;
		} 		
 	},

	// Iterativo con while
	dos: function(x) {
		var m = 0;
		var izq = 0;
		var der = v.length-1;
		while (izq <= der){
			m = Math.round(((der-izq)/2) + izq);
			if (x < v[m]){
				der = m-1;
			} else if (x > v[m]) {
				izq = m+1;
			} else {
				return m+1;
			}
		}
		return -1;
	},

	// Promesas nativas ES6
	tres: function(x) {
		var izq = 0;
		var der = v.length-1;		

		var miPromesa = new Promise((resolve, reject) => {	
			var result = obj.unoR(0, v.length-1, x);
			return resolve(result);
		});
		miPromesa.then(
			(resul) => {
				return resul;
			}
		); 
	},

	// Async Await
	cuatro: function(x) {
	}
}



module.exports = obj;

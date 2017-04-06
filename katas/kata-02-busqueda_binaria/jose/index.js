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
			return 0;
		} 		
 	},

	// Con while
	dos: function(x) {
		var encontrado = false;
		var m = 0;
		var izq = 0;
		var der = v.length-1;
		while (!encontrado){
			m = Math.round(((der-izq)/2) + izq);
			if (x < v[m]){
				der = m-1;
			} else if (x > v[m]) {
				izq = m+1;
			} else {
				encontrado = true;
			}
			if(izq > der){
				return 0;
			}
		}
		return m+1;
	}
}



module.exports = obj;

// Escribe aquí tu codigo Javascript
function menor(a,b,c){
	if(a<b && b<c){
		return " a es el menor"
	} else if(a<c && c<b){
		return " a es el menor"
	}else if(b<a && a<c){
		return " b es el menor"
	}else if(b<c && c<a){
		return " b es el menor"
	}else if(c<a && a<b){
		return " c es el menor"
	}else if(c<b && b<a){
		return " c es el menor"
	}
};
alert(menor(5,8,9));


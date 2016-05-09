// Escribe aquí tu codigo Javascript
function operador(){
	var signo=prompt("¿Qué operación deseas realizar? \nIngresa el tipo de operador (+, -, * ó /)");
	if(signo=="+"||signo=="/"||signo=="-"||signo=="*"){
		var number=prompt("Ingresa los 2 números a operar:");
		var cadena = number.split([" "]);
		switch(signo){
			case "+":
				var suma=parseInt(cadena[0])+parseInt(cadena[1]);
				alert("La suma es "+suma)
				break;
			case "-":
				if(cadena[0]<cadena[1])
					var resta=cadena[1]-cadena[0];
				else if(cadena[1]<cadena[0])
					var resta=cadena[0]-cadena[1];
				alert("La resta es "+resta)
				break;
			case "*":
				var multiplicacion=cadena[0]*cadena[1];
				alert("La multiplicación es "+multiplicacion)
				break;	
			case "/":
				var division= (cadena[0]/cadena[1]).toFixed(2);
				alert("La división es "+division);
				break;
			default:
				alert("Operación inválida");
		}
	} else{
		alert("Operación inválida.");
	}
}
operador();



function suma(a, b){
	var c= a+b;
	var d= Math.pow(c,2);
	return d;
}
var valor=prompt("Ingresa dos valores para sacar el cuadrado de la suma de éstos:");
var array=valor.split([" "]);
alert("El cuadrado de la suma de "+array[0]+" y "+array[1]+" es "+suma(parseInt(array[0]), parseInt(array[1])));



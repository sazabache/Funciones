// Escribe aquí tu codigo Javascript
function palin(){
		text = prompt("Escribe la palabra o frase a verificar: ");
		textinverse = text.split("").reverse().join("");
		if (text == textinverse){
			alert("Si es un palíndromo.")
		}else{
			alert("No es un palíndromo.")
		}
};
palin();



function texto(text){
	text = prompt("Escribe una oración: ");
	if (text.toUpperCase === text){
		alert("El texto está escrito en mayúsculas.");
	}else if (text.toLowerCase === text){
		alert("El texto está escrito en minúsculas.");
	}else{
		alert("El texto está escrito en mayúsculas y minúsculas.");
	}

};
texto();
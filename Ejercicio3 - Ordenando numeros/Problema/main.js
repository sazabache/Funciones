function orden(){
	var number=prompt("Ingrese 3 números:");
	var arraynum = number.split([" "]);
	if(arraynum[0]==arraynum[1]&& arraynum[0]==arraynum[2]){
		alert("Los tres números son iguales");
	} else if(arraynum[2]>arraynum[1]&&arraynum[1]>arraynum[0]){
		alert("El orden es: "+arraynum[0]+" "+arraynum[1]+" "+arraynum[2])
	} else if(arraynum[2]>arraynum[0]&&arraynum[0]>arraynum[1]){
		alert("El orden es: "+arraynum[1]+" "+arraynum[0]+" "+arraynum[2])
	} else if(arraynum[1]>arraynum[0]&&arraynum[0]>arraynum[2]){
		alert("El orden es: "+arraynum[2]+" "+arraynum[0]+" "+arraynum[1])
	} else if(arraynum[1]>arraynum[2]&&arraynum[2]>arraynum[0]){
		alert("El orden es: "+arraynum[0]+" "+arraynum[2]+" "+arraynum[1])
	} else if(arraynum[0]>arraynum[1]&&arraynum[1]>arraynum[2]){
		alert("El orden es: "+arraynum[2]+" "+arraynum[1]+" "+arraynum[0])
	} else if(arraynum[0]>arraynum[2]&&arraynum[2]>arraynum[1]){
		alert("El orden es: "+arraynum[1]+" "+arraynum[2]+" "+arraynum[0])
	} 
}
orden();
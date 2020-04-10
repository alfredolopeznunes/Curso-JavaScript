'use strict'

//Funciones
// Una Función es una agrupación reutilizable de un conjunto de instrucciones.

function calculadora(numero1, numero2, mostrar = false){
	//conjunto de instrucciones a ejecutar
	if(mostrar == false) {
		console.log("Suma: " + (numero1+numero2));
		console.log("Resta: " + (numero1-numero2));
		console.log("multiplicación: " + (numero1*numero2));
		console.log("División: " + (numero1/numero2));
		console.log(mostrar);
		console.log("***********************************");
		//return "Hola soy la calculadora";
	}else{
		document.write("Suma: " + (numero1+numero2)+"<br>");
		document.write("Resta: " + (numero1-numero2)+"<br>");
		document.write("multiplicación: " + (numero1*numero2)+"<br>");
		document.write("División: " + (numero1/numero2)+"<br>");
		document.write(mostrar+"<br>");
		document.write("***********************************")+"<br>";
		//return "Hola soy la calculadora";
	}
}

calculadora(12, 8);
calculadora(98, 2, true);

/*for(var i = 1; i <= 10; i++) {
	console.log(i);
	calculadora(i,8);
}*/


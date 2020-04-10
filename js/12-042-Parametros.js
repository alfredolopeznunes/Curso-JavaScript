'use strict'

//Funciones
// Una Función es una agrupación reutilizable de un conjunto de instrucciones.

function calculadora(numero1, numero2){
	//conjunto de instrucciones a ejecutar
	console.log("Suma: " + (numero1+numero2));
	console.log("Resta: " + (numero1-numero2));
	console.log("multiplicación: " + (numero1*numero2));
	console.log("División: " + (numero1/numero2));
	console.log("***********************************");

	//return "Hola soy la calculadora";
}

//calculadora(12, 8);
//calculadora(98, 2);

for(var i = 1; i <= 10; i++) {
	console.log(i);
	calculadora(i,8);
}
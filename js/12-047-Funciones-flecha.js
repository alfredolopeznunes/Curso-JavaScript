'use strict'

// Funciones anonimas y callbacks
// Es una función sin nombre

// var pelicula = function(nombre){
// 	return "La pelicula es: "+nombre;
// }

function sumame(numero1, numero2, sumaYmuestra, sumaPorDos){
	var sumar = numero1 + numero2;
	sumaYmuestra(sumar);
	sumaPorDos(sumar);
	return sumar;
}

sumame(5, 7, dato => {
	console.log("funciones por flechas");
	console.log("La suma es:", dato);
},
dato => {
	console.log("La suma por dos es:", (dato*2));
});
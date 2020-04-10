'use strict'

// Transformación de textos
var numero = 444;
var texto1 = "Bienvenido al curso de javascript de Victor Robles";
var texto2 = "es muy buen curso";

var dato = numero.toString();
	dato = texto1.toUpperCase();
	dato = texto2.toLowerCase();
console.log(typeof dato);

//Calcular longitud

var nombre = "Alfredo López";

console.log(nombre.length);

// COncatenar - Unir textos

var textoTotal = texto1+ " " +texto2;
var textoTotal2 = texto1.concat(" "+texto2);

console.log(textoTotal);
console.log(textoTotal2);
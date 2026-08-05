// Tipos de datos

// Undefined
let variable; // tambien de tipo any (de TypeScript)
console.log(variable);
console.log(typeof variable);

// String
let nombre = "John";
console.log(nombre);
console.log(typeof nombre);

const producto = "Monitor 20 pulgadas";
console.log(producto);
console.log(typeof producto);

// numbers
const edad = 30;
console.log(edad); 
console.log(typeof edad); // all of them are number, no hay distincion entre enteros y decimales


// BigInt
const numeroGrande = 9007199254740991n; // o const numeroGrande = BigInt(9007199254740991);
console.log(numeroGrande);
console.log(typeof numeroGrande);

// Boolean
const booleano = true;
console.log(booleano);
console.log(typeof booleano);

// Null
const valorNulo = null;
console.log(valorNulo);
console.log(typeof valorNulo); // object, es un error de JS, pero no se puede cambiar

// Symbol (Bueno para libreria, no tanto para código)
const simbolo1 = Symbol(30);
const simbolo2 = Symbol(30);
console.log(simbolo1);
console.log(typeof simbolo1);
// Son únicos porque cada symbol es único, aunque tengan el mismo valor
console.log(simbolo1 === simbolo2); // false
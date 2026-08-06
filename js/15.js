// Funciones - Arrow Functions
const sumar = (a = 1, b = 1) => console.log(a + b); // solo si tiene una sola linea de código, no es necesario usar llaves ni return

sumar(5, 3); // Llamada a la función con parámetros
sumar(15, 4);
sumar(7, 8);

// La declaración es como las function expressions, no pueden ser llamadas antes de su declaración, pero tienen una sintaxis más corta y no tienen su propio contexto de this.
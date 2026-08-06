// Funciones - Fuction Expressions
const sumar = function(a = 1, b = 1) {
	console.log(a + b);
}
// La diferencia con las funciones declaradas es que estas no pueden ser llamadas antes de su declaración, mientras que las funciones expresadas si pueden ser llamadas antes de su declaración.

sumar(5, 3); // Llamada a la función con parámetros
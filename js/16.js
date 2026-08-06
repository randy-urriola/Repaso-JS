// Funciones que retornan valores
const sumar = function (a = 1, b = 1) {
	return a + b;
}

const resultado = sumar(5, 3); // Llamada a la función con parámetros
console.log(resultado); // Imprime el resultado de la función


const restar = (a = 1, b = 1) => a - b; // Función flecha que retorna un valor, no necesita llaves ni return si es una sola línea de código
const resultadoResta = restar(10, 4);
console.log(resultadoResta); // Imprime el resultado de la función

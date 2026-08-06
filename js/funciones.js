export function sumar(a, b) {
	return a + b;
}

export function restar(a, b) {
	return a - b;
}

export const dividir = (a,b) => a / b

export default function multiplicar(a, b) {
  return a * b
}

// Solo hay un export default por archivo, si se quiere tener mas da error.

// las funciones declaradas aqui pueden ser como function expression o arrow function, lo ideal es que sean de un tipo y no mezclar.

// un arrow function del export default es diferente, se declara la funcion como cualquier otra y en una
// linea aparte se especifica como export default, ejemplo:
// export default dividir
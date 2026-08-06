// Array methods

const tecnologias = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js'];
const numeros = [10, 20, 30, 40, 50];

// Filter
const nuevoArray = tecnologias.filter((tech) => tech === 'HTML');
console.log(nuevoArray); // Imprime ['HTML']

const numerosFiltrados = numeros.filter((num) => num !== 30);
console.log(numerosFiltrados); // Imprime [10, 20, 40, 50]

// Include
const incluyeHTML = tecnologias.includes('HTML');
console.log(incluyeHTML); // Imprime true

// some - devuelve true si al menos un elemento cumple la condición
const hayNumeroMayorQue50 = numeros.some((num) => num > 50);
console.log(hayNumeroMayorQue50); // Imprime true

// Find - Devuelve el primer elemento que cumple una condición
const resultado = numeros.find((numero) => numero > 20);
console.log(resultado);

// Every - retorna true o false si todos cumplen la condición
const resultado2 = numeros.every((numero) => numero > 15);
console.log(resultado2);

// Reduce - retorna un acumulado del total
const reduceConDosParametros = numeros.reduce((total, numero) => {
  console.log(total)
  console.log(numero)

  return total + numero
}, 0)
// Con arrow function: const reduceConDosParametros = numeros.reduce((total, numero) => total + numero, 0)
console.log(reduceConDosParametros)
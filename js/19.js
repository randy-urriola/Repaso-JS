// Operador igual e igual estricto

const numero1 = 20;
const numero2 = '20';

if (numero1 == numero2) {
	console.log('Si son iguales');
} else {
	console.log('No son iguales');
}

const numero3 = 20;
const numero4 = '20';

if (numero1 === numero2) {
	console.log('Si son iguales');
} else {
	console.log('No son iguales');
}
// Es recomendable usar siempre el operador estricto para evitar errores
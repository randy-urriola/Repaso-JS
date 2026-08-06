// Condicionales
const disponible = 4000;
const retirar = 200;

const auth = false;

if (auth) {
	console.log('Acceso al sistema...');
} else {
	console.log('No tiene permiso, Inicie Sesión');
}

if (disponible < retirar) {
	console.log('Puede retirar');
} else {
	console.log('Saldo insuficiente...');
}
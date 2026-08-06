// ternarios
const auth = true;
const saldo = 1000;
const pagar = 500;
const tarjeta = true;

// Forma normal
if (auth) {
	console.log('Acceso al sistema...');
} else {
	console.log('No tiene permiso, Inicie Sesión');
}

// Con operador ternario
auth
	? console.log('Acceso al sistema...')                 // resultado si cumple la condicion
  : console.log('No tiene permiso, Inicie Sesión');     // resultado si no cumple la condicion
  

saldo > pagar ? console.log('Puedes pagar') : console.log('No puedes pagar');

saldo > pagar || tarjeta ? console.log('Puedes pagar') : console.log('No puedes pagar');

// Se pueden anidar varios nivel pero no es lo recomendado porque el codigo se hace dificil de mantener
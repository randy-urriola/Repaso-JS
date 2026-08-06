// Operadores logicos Or y And

const saldo = 1000
const pagar = 500
const tarjeta = true 

if (saldo > pagar && tarjeta) {
  console.log('Puedes pagar');
} else {
  console.log('No puedes pagar');
}
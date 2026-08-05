// Objetos - Destructuring de dos o más objetos

const producto = {
	nombre: 'Monitor 20 pulgadas',
	precio: 300,
	disponible: false,
};

const cliente = {
  nombre: 'Juan',
  tipo: 'Premium',
  direccion: {
    ciudad: 'Medellin',
    pais: 'Colombia'
  }
};

const { nombre } = producto;
const { nombre: nombreCliente } = cliente; // se puede renombrar la variable al momento de hacer destructuring, para evitar conflictos de nombres

console.log(nombre);
console.log(nombreCliente);

// Esto es util cuando se tiene multiples dependencias y se quiere evitar conflictos de nombres, ya que se puede renombrar la variable al momento de hacer destructuring.

const { direccion: { ciudad } } = cliente; // se puede hacer destructuring de un objeto dentro de otro objeto y se hace con llaves, en este caso se esta accediendo a la propiedad ciudad del objeto direccion del objeto cliente.
console.log(ciudad); 
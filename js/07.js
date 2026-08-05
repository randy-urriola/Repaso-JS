// Unir dos o más objetos

const producto = {
	nombre: 'Monitor 20 pulgadas',
	precio: 300,
	disponible: false,
};

const cliente = {
	nombre: 'Juan',
	Premium: true,
};

const carrito = {
  cantidad: 1,
  ...producto, // los tres puntos indican que se va a hacer un spread operator, es decir, que se van a unir los dos objetos, y se van a crear nuevas propiedades en el objeto carrito, con las propiedades del objeto producto.
}

console.log(carrito);

const nuevoObjeto = {
  ...producto,
  ...cliente,
}

console.log(nuevoObjeto);

const nuevoObjeto2 = Object.assign(producto, cliente); // Object.assign() es un metodo que permite unir dos o más objetos, y crear un nuevo objeto con las propiedades de los objetos que se estan uniendo. El primer parametro es el objeto al que se le van a agregar las propiedades de los otros objetos, y los siguientes parametros son los objetos que se van a unir.

console.log(nuevoObjeto2);

// En resumen, se puede unir dos o más objetos de dos formas, con el spread operator y con Object.assign(). La diferencia es que el spread operator crea un nuevo objeto, mientras que Object.assign() modifica el primer objeto que se le pasa como parametro.
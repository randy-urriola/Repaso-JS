// Manipulación de objetos

const producto = {
	nombre: 'Monitor 20 pulgadas',
	precio: 300,
	disponible: false
};

producto.disponible = true; // se hace como asignación de una variable, cambia el valor a pesar que producto es const, ya que no se esta reasignando el objeto, sino cambiando un valor de una propiedad del objeto

producto.imagen = 'imagen.jpg'; // se puede agregar una propiedad al objeto, aunque no exista

delete producto.disponible; // elimina una propiedad del objeto.

// Prevenir que un objeto no pueda ser modificado, se puede usar Object.freeze(), esto hace que el objeto sea inmutable, no se pueden agregar, eliminar o modificar propiedades.
Object.freeze(producto);

// Object.seal(producto); // esto hace que el objeto sea sellado, no se pueden agregar ni eliminar propiedades, pero si se pueden modificar las existentes.
Object.seal(producto);

console.log(producto);
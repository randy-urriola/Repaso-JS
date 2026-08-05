// Objetos
// Colección de propiedades y cada una tiene una sociedad con una key y un value
const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true
}

console.log(producto);
console.log(typeof producto);
// Darle formato de tabla
console.table(producto);

// Mostrando un valor en especifico
console.log(producto.nombre);

// Destructuring, es una forma de extraer valores de un objeto y asignarlos a variables
const { nombre, precio, disponible } = producto;
console.log(nombre);
console.log(precio);
console.log(disponible);

// Object literal enhancement, es una forma de crear un objeto a partir de variables
const autenticado = true;
const usuario = "Randy";
const nuevoObjeto = {
    autenticado,            // es lo mismo que poner autenticado: autenticado, solo se escribe uno cuando la key y el value se llaman igual
    usuario
}
console.log(nuevoObjeto);

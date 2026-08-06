// Iteradores

const tecnologias = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js'];

// Forma más clásica
for(let i = 0; i < tecnologias.length; i++) {
    console.log(tecnologias[i]);
}

// ForEach
tecnologias.forEach(function(tech) {
    console.log(tech);
});

// Map - diferencia con los anteriores es que puede generar un nuevo arreglo en base a la función que se le pase como argumento.
const nuevoArray = tecnologias.map(function(tech) {
    return tech.toUpperCase();
});
console.log(nuevoArray);

// For ... of - ejecuta un bloque de código para cada elemento de un iterable (arreglo, string, etc.), es parecido a un forEach, pero no tiene acceso al índice del elemento.
for (const tech of tecnologias) {
    console.log(tech);
}
// Modificando Arrays

const tecnologias = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js'];
tecnologias[4] = 'Node.js y Express';
console.table(tecnologias);

// Métodos para arreglos
tecnologias.push('GraphQL'); // Agrega un elemento al final del arreglo pero lo muta (modifica) cosa que en React no es recomendable, ya que se recomienda no mutar el estado, por lo que se recomienda usar el operador spread para crear un nuevo arreglo y agregarle el elemento al final.
console.table(tecnologias);

const nuevoArreglo = [...tecnologias, 'TypeScript']; // Agrega un elemento al final del arreglo y crea un nuevo arreglo, se puede agregar al inicio como ['TypeScript', ...tecnologias]
console.table(nuevoArreglo);

tecnologias.shift(); // Elimina el primer elemento del arreglo pero lo muta (modifica) cosa que en React no es recomendable, ya que se recomienda no mutar el estado, por lo que se recomienda usar el operador filter para crear un nuevo arreglo y eliminar el primer elemento.
const tecnologias2 = tecnologias.filter(function (tech){
  if(tech !== 'HTML') {
    return tech;
  }
});

console.table(tecnologias2);

// Map - Crea un nuevo arreglo con los resultados de la función que se le pasa como argumento, pero no muta (modifica) el arreglo original
const tecnologias3 = tecnologias.map(function (tech) {
	if (tech === 'Node.js y Express') {
		return 'Nest.js';
	} else {
		return tech;
	}
});

console.table(tecnologias3);
// Destructuring de arreglos

const tecnologias = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js'];

// Forma tradicional de acceder a los elementos de un arreglo
const react = tecnologias[3];

// Destructuring
const [,,,reactjs] = tecnologias; // Se puede hacer destructuring de un arreglo y se hace con corchetes, en este caso se esta accediendo al cuarto elemento del arreglo tecnologias y se esta asignando a la variable reactjs. Se debe asignar posición por posición, si se quiere acceder a un elemento en específico se debe dejar vacías las posiciones anteriores con comas, puede ser confuso así que se recomienda usar la forma tradicional la mayoria de las veces.
console.log(react);
console.log(reactjs);
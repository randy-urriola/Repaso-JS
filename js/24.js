// ECMAScript Modules
import multiplicando, { sumar as funcionSumar, restar, dividir} from "./funciones.js"; 

const resultado = funcionSumar(20, 10);
const resultado2 = restar(20, 10);
const resultado3 = multiplicando(20, 10);
const resultado4 = dividir(20, 10);

console.log(resultado)
console.log(resultado2)
console.log(resultado3)
console.log(resultado4)

// llama al archivo funciones.js para usar las funciones declaradas ahi. En el html se debe especificar el tipo
// type="module" <script src="js/24.js" type="module"></script> para que lo reconozca como module

// Si las funciones en funciones.js se declaran con export function nombreFuncion, al llamar en los {} debe
// usar el mismo nombre declarado en funciones.js para que lo reconozca en este archivo.

// Con el 'as' se le puede dar un alias para evitar la colicion de nombres. Ya que eso puede generar erroes
// al usar paquetes en donde hay funciones con el mismo nombre.
// Optional chaining (?)
const alumno = {
  nombre: 'randy',
  clase: 'Programacion',
  aprovado: true
}

console.log(alumno.examenes?.examen1) // funciona como if, verifica si la propiedad examenes existe imprime examen1, sino arroja undefined. Esto evita que el programa se interrumpa

// Nullish opertator (??) - retorna el valor derecho cuando el izquierdo es null o undefined, si tiene valor se retorna el valor
const pagina = null ?? 1
console.log(pagina)
const pagina2 = 10 ?? 1;
console.log(pagina2);
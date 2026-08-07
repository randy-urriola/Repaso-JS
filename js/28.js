// Selectores: es seleccionar un elemento especifico y se realizan operaciones con js para modificarlo de alguna forma
const heading = document.querySelector('.heading')

console.log(heading)
console.log(heading.tagName)
console.log(heading.textContent)
console.log(heading.classList)
console.log(heading.id)

const enlaces = document.querySelectorAll('.navegacion a')
console.log(enlaces)

// Esta es la forma en la que se manipula el DOM con JS
// querySelector y querySelectorAll se usan para seleccionar elementos del DOM y la principal diferencia
// entre los dos es que querySelector trae solo un elemento o el primero que cumpla la condicion mientras
// el otro trae todos los elementos que se especifican
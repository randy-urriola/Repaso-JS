// Manipular elementos HTML con JS

const heading = document.querySelector('.heading');
const enlaces = document.querySelectorAll('.navegacion a');

// cambiar el contenido de un elemento
heading.textContent = 'Un nuevo heading...'

// asigna un valor por defecto
const inputNombre = document.querySelector('#nombre') // se selecciona un Id con #
inputNombre.value = 'Un nuevo valor...' // con value asigna un valor por defecto
inputNombre.dataset.nombre = 'input' // con dataset se crean atributos personalizados

// remueve o quita propiedades del elemento como las clases
heading.removeAttribute('class')

// con el foreach se modifican todo el contenido de los enlaces
enlaces.forEach(enlace => enlace.textContent = 'Nuevo Enlace')
enlaces[0].textContent = 'Link' // con [0] se modifica solo el del primer elemento, de esta forma se accede a c/u


// Nota: cuando se usa querySelector se puede asignar directamente pero con querySelectorAll se debe iterar o pasarle la posicion ya que es como si fuera una coleccion
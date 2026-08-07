// Fetch API con promises
// Proporciona una interfaz para recuperar recursos para obtener datos a traves de la red

const url = 'https://jsonplaceholder.typicode.com/comments';

// Se puede llamar directo o desde una función
fetch(url)                  // trata de conectarse a un servidor
  .then((response) => {     // si hay respuesta se retorna en formato json
    if (response.ok) {
      return response.json()
    }
    throw new Error('Hubo un error...')
  })
  .then(data => {           // despues de terminar de ejecutar el primer then
  console.log(data)         // entonces lo muestra
  })
  .catch(error => {         // si algo falla durante los pasos, muestra el mensaje de error
  console.log(error.message)
})
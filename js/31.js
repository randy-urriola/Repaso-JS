// Eventos de DOM - Inputs

// evento para leer mientras se escribe en un elemento de tipo input
const inputNombre = document.querySelector('#nombre');
inputNombre.addEventListener('input', (e) => {
	console.log(e.target.value);
});

// evento para modificar el comportamiento en un elemento de tipo input
const inputPassword = document.querySelector('#password');
inputPassword.addEventListener('input', functionPassword);

function functionPassword() {
	inputPassword.type = 'text'; // cambia a tipo texto para ver lo que se escribe

	setTimeout(() => {
		inputPassword.type = 'password'; // devuelve al tipo password para ocultar
	}, 300); // lo deja visible por 300ms
}

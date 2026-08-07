// Fetch API con Async Await
// Igual que con el anterior pero este si necesita declararse con funciones y puede ser arrow o declaration

const url = 'https://jsonplaceholder.typicode.com/comments';

fetch(url)
	.then((response) => {
		if (response.ok) {
			return response.json();
		}
		throw new Error('Hubo un error...');
	})
	.then((data) => {
		console.log(data);
	})
	.catch((error) => {
		console.log(error.message);
	});

// Async Await
const consultarAPI = async () => {
	try {
    const response = await fetch(url); // intenta conectarse a la url, espera la respuesta
    if (!response.ok) {
      throw new Error('Hubo un error...');
		}
		const data = await response.json(); // cuando se tiene se retorna como json
		console.log(data); // se muestran
	} catch (error) {
		console.log(error);
	}
};

consultarAPI();

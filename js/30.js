// Eventos del DOM - Clicks

const heading = document.querySelector('.heading');
const enlaces = document.querySelectorAll('.navegacion a');

heading.addEventListener('click', () => {
  heading.textContent = 'Nuevo heading al dar click...'
})

heading.addEventListener('mouseenter', () => {
	heading.textContent = 'parecido al hover del css cuando entra el pointer...';
});

heading.addEventListener('mouseleave', () => {
	heading.textContent = 'saliendo...';
});


enlaces.forEach(enlace => {
  enlace.addEventListener('click', (e) => {
    e.preventDefault()
    e.target.textContent = 'Diste click...'
  })
})


// Para ver todos los eventos que se pueden hacer visitar: https://developer.mozilla.org/es/docs/Web/API/Element
// Eventos de DOM - Submit
// se manda a llamar cuando preciona en un formulario para enviar y se selecciona el form
const formulario = document.querySelector('#formulario')
formulario.addEventListener('submit', e => {
  e.preventDefault()

  const nombre = document.querySelector('#nombre').value
  const password = document.querySelector('#password').value

  // Prevenir nuevas alertas
  const alertaPrevia = document.querySelector('.alerta')
  alertaPrevia?.remove()

  // nuevo elemento para colocar la alerta
  const alerta = document.createElement('DIV')
  alerta.classList.add('alerta', 'text-white', 'uppercase', 'text-sm', 'text-center', 'p-2', 'font-black')

  if (nombre === '' || password === '') {
    alerta.textContent = 'Todos los campos son obligatorios...';
    alerta.classList.add('bg-red-500')
  } else {
    alerta.textContent = 'Todos bien, iniciando sesion...';
		alerta.classList.add('bg-green-500');
  }

  formulario.appendChild(alerta)

  setTimeout(() => {
    alerta.remove()
  }, 3000);
})
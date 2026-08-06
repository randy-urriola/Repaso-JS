// Funciones

function saludar() {
    console.log("Hola, mundo!");
}

saludar(); // Llamada a la función

// Función con parámetros
function sumar(a = 1, b = 1) {
    console.log(a + b);
}

sumar(5, 3); // Llamada a la función con parámetros
sumar(); // Llamada a la función sin parámetros (usa los parametros por defecto)
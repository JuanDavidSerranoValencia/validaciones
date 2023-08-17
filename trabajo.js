const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const longitud_minima = 1;
const longitud_maxima = 25000;

let nuevaContraseña = '';

// Función para verificar si una cadena es minúscula
const isLowerCase = (str) => /^[a-z]+$/.test(str);

// Función para cerrar la interfaz y mostrar la nueva contraseña
const finalizar = () => {
    rl.close();
    console.log("Nueva contraseña generada:"+nuevaContraseña);
};

// Función para manejar las preguntas de las contraseñas
const preguntarContraseñas = () => {
    rl.question("Ingrese la primera contraseña: ", (password1) => {
        rl.question("Ingrese la segunda contraseña: ", (password2) => {
            if (password1.length !== password2.length) {
                console.clear()
                console.log("Las contraseñas no tienen la misma longitud");
                preguntarContraseñas(); // Volver a preguntar
            } else if ((password1.length < longitud_minima.password1.length > longitud_maxima)  (password2.length < longitud_minima.password2.length > longitud_maxima)) {
                console.clear()
                console.log("La contraseña debe tener una longitud mayor a 0 y menor a 25000");
                preguntarContraseñas(); // Volver a preguntar
            } else if (!isLowerCase(password1)  && !isLowerCase(password2)) {
                console.clear()
                console.log('Las contraseñas deben contener solo letras minúsculas.');
                preguntarContraseñas(); // Volver a preguntar
            } else {
                for (let i = 0; i < password1.length; i++) {
                    nuevaContraseña += password1[i] + password2[i];
                }
                finalizar();
            }
        });
    });
};
console.clear()
preguntarContraseñas();
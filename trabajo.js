//###########################
//VALIDACION CONTRASEÑA
//###########################

let contraseña = '';
const max = 1;
const min = 25000;

const isLowerCaseWithoutNumbers = (str) => /^[a-z]+$/.test(str) && !/Number+$/.test(str);

const mostrarContra = () => {
    InOut.close();
    console.log(`Contraseña Final: ${contraseña}`);
};

const pedirContra = () => {
    InOut.question("Ingrese su primera contraseña: ", (a) => {
        InOut.question("Ingrese su segunda contraseña: ", (b) => {
            if (!isLowerCaseWithoutNumbers(a) || !isLowerCaseWithoutNumbers(b)) {
                console.clear()
                console.log('Solo ingrese numeros y letras minusculas para sus contraseñas.');
                pedirContra();
            }else if ((a.length < max || a.length > min) || (b.length < max || b.length > min)) {
                console.clear()
                console.log("La longitud de la contraseña no coincide maximo 2500");
                pedirContra();  
            } else {
                if(a.length >= b.length){
                    for (let i = 0; i < a.length; i++) {
                        contraseña += a[i];
                        if (i < b.length) {
                            contraseña += b[i];
                        }
                    }
                } else {
                    for (let i = 0; i < b.length; i++) {
                        if (i < a.length) {
                            contraseña += a[i];
                        }
                        contraseña += b[i];
                    }
                }
                mostrarContra();
            }
        });
    });
};

const lectura = require('readline');

const InOut = lectura.createInterface({
    input: process.stdin,
    output: process.stdouts
});
pedirContra();

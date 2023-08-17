//###########################
//VALIDACION CONTRASEÑA
//###########################

let contraseña = "";
const max = 1;
const min = 25000;

const validacion = (str) => /^[a-z]+$/.test(str) && !/Number+$/.test(str);

const terminar = () => {
    InOut.close();
    console.log(`Contraseña Final: ${contraseña}`);
};

const pedirContra = () => {
    InOut.question("Digite la contraseña 1: ", (a) => {
        InOut.question("Digite la contraseña 2: ", (b) => {
            if (!validacion(a) || !validacion(b)) {
                console.clear()
                console.log('parametros incorrectos para la creacion de su contraseña , no ingresar numeros ni letras mayusculas');
                pedirContra(); 
            }else if ((a.length < max || a.length > min) || (b.length < max || b.length > min)) {
                console.clear()
                console.log("Longitud incorrecta para su contraseña deber ser entre 1 y 25000 caracteres");
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
                terminar();
            }
        });
    });
};

const lectura = require('readline');

const InOut = lectura.createInterface({
    input: process.stdin,
    output: process.stdout
});

pedirContra();
 //JUAN DAVID SERRANO VALENCIA

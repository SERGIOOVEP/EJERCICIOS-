
var userOK = "Estudiante";
var passwordOK = "batman17";
var user, password, contador = 3;
var validation = false;
alert("Hola");

do {
    user = prompt("Usuario");
    password = prompt("Password");
    // los booleanos pueden almacenar operaciones
    // validation = user == userOK && password == passwordOK; 
    if (user == userOK && password == passwordOK) {
        validation = true;
    } else {
        contador--;
        alert("Usuario o password incorrecto.");
    }
    if (contador > 1 && validation == false) {
        alert("Piensa mejor, todavía tienes " + contador + " intentos.");
    } else if (contador == 1 && validation == false) {
        alert("Piensa mejor, todavía tienes " + contador + " intento.");
    }
} while (!validation && contador > 0);
if (validation) {
    alert("Usuario y password correctos.");
} else {
    alert("Has agotado tus tres intentos");
} var letter = window.prompt("Inserta una letra: ");
let cont = 0;
for (let i = 0; i < sentence.length; i++) { /*Esto sirve para recorrer las letras de la frase*/
    if (sentence[i] == letter) {
        cont++;
    }
}

alert("La letra " + letter + " aparece " + cont + " veces");
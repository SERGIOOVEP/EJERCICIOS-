
/*1.Solicita al usuario tres números enteros e indícale cuál es el menor.*/
alert("Inserta un número entero")
var a = prompt("a")
var b = prompt("b")
var c = prompt("c")


if (a <= b && a <= c) {
    alert(a);
} else if (b <= a && b <= c) {
    alert(b);
} else {
    alert(c);
}


/*2.Solicita al usuario una frase y una letra y muestra la cantidad de veces que aparece la letra en la frase.*/

var sentence = window.prompt("Inserta una frase: ");
var letter = window.prompt("Inserta una letra: ");
let cont = 0;
for (let i = 0; i < sentence.length; i++) { /*Esto sirve para recorrer las letras de la frase*/
    if (sentence[i] == letter) {
        cont++;
    }
}

alert("La letra " + letter + " aparece " + cont + " veces");


/*3.Suma o resta (según elija el usuario) dos números reales.*/


var numero1 = window.prompt("Inserta un numero: ");
var numero2 = window.prompt("Inserta otro numero: ");
var operacion = window.prompt("Indique suma o resta (s/r): ");
numero1 = parseFloat(numero1);
numero2 = parseFloat(numero2);

if (operacion == 's') {
    alert(numero1 + numero2);
}
if (operacion == 'r') {
    alert(numero1 - numero2);
}
if (operacion != 'r' && operacion != 's') {
    alert('has metido mal la letra')
}/*
 

4.Almacena en dos variables datos de validación (usuario y contraseña) correctos y permite que el usuario valide (dispone de 3 intentos)*/

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
}






/*5.Solicita al usuario una letra, si inserta una a muestra el número 7, si es una b, el 9,
    si es una c el 101 y si no es ninguno de los tres, indícale que se ha equivocado de letra*/

var a = prompt("letra");

switch (a) {
    case "a": alert(7);
        break;
    case "b": alert(9);
        break;
    case "c": alert(101);
        break;
    default: alert("te has equivocado de letra");
}




/*6.Ordena alfabéticamente un array con 7 palabras, puedes usar el algoritmo de la burbuja





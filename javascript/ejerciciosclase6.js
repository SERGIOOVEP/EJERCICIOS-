
//1.Solicita al usuario tres números enteros e indícale cuál es el menor.

alert("Introduzca 3 números enteros y te diré cual es el menor")
var n1 = prompt()
var n2 = prompt()
var n3 = prompt()

if (n1 < n2 && n1 < n3) {
    alert(n1)
} else if (n2 < n1 && n2 < n3) {
    alert(n2)
} if (n3 < n1 && n3 < n1) {
    alert(n3)
}


//2.Solicita al usuario una frase y una letra y muestra la cantidad de veces que aparece la letra en la frase.

var frase = prompt("Inserta una frase: ");
var letra = prompt("Inserta una letra: ");
let cont = 0;
for (let i = 0; i < frase.length; i++) {
    if (frase[i] == letra) {
        cont++;
    }
}
alert("La letra " + letra + " aparece " + cont + " veces");



//3.Suma o resta (según elija el usuario) dos números reales.


alert("Introduzca un número")
var n1 = prompt()
alert("¿Prefiere sumar o restar (s/r)")
var n2 = prompt()
alert("Introduzca otro número")
var n3 = prompt()
n1 = parseFloat(n1)
n3 = parseFloat(n3)

if (n2 == "s") {
    alert(n1 + n3);
} if (n2 == "r") {
    alert(n1 - n3);
} if (n2 != 'r' && n2 != 's') {
    alert('has introducido mal los datos')
}



//4.Almacena en dos variables datos de validación(usuario y contraseña) correctos y permite que el usuario valide(dispone de 3 intentos)

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




//6.Ordena alfabéticamente un array con 7 palabras, puedes usar el algoritmo de la burbuja


const lista = ["alma", "ojo", "mesa", "gafas", "raton", "lapiz", "silla"];






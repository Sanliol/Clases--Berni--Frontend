console.log('3. Estoy en el archivo externo')

/* 
Comentarios
multiples 
lineas
 */

//console.log('Esto es un comentario de una linea')

//Palabras reservadas:    Indican tareas al lenguaje de programacion
/* var
let
for
function
if
 */

/* Javascript es case sensitive: entiende e interpreta cuatro valores de casa (en nuestro ejemplo) porque una esta en mayus y otra en minuscula 
Casa
casa
CAsa
caSA
CASA */

//variables: espacio de memorias para guardar datos/info
//declaracion de una variable y asignacion un nombre
var nombre; //no es obligatorio el ;
//asignacion de una variable 
//= : operador de asignacion(le asigna valores a la variable)
nombre = "Pepe" //ahora "Pepe" es un valor que se guarda en el espacio de memoria "nombre"

//recuperar la info
console.log(nombre) /* me muestra en la consola del browser el valor de la variable "nombre" */

var apellido =  'Pérez' //js es flexible (puedo utilziar comillas dobles o simples siempre y cuando mi dato sea un string: datos de caracter, palabras)

console.log(apellido)

//declaramos y asignamos otra variable
provincia = 'Mendoza' //como Js es flexible puedo no poner la palabra reservada "var"
console.log(provincia);

//concatenar datos:     para unir informacion(ej.Para que me imprima en la consola el nombre, apellido y provincia juntos)
console.log('Mi nombre es: ' + nombre + ' y mi apellido es: ' + apellido + " .Vivo en la provincia de: " + provincia) ; //El + es para concatenar, y siempre con un espacio.Debo agregar la variable dentro de la funcion pero fuera del rango del string(el string es lo que va entre comillas, que pueden ser simples o dobles)
console.log('======================================================================')
//template string: interpolar texto con variables, a traves de las comillas inclinadas.
console.log(`Mi nombre es ${nombre} y mi apellido es ${apellido}. Vivo en la provincia de ${provincia}`) //puedo escribir la variable dentro del ambito del string gracias a las comillas inclinadas y al signo de pesos y las llaves.

//let reemplaza a var, con los años
let país = 'Argentina' //con let puedo declarar una sola vez

var apellido = 'Gomez' //con var puedo reasignar la variable
console.log('Mi nombre es: ' + nombre + ' y mi apellido es: ' + apellido + " .Vivo en la provincia de: " + provincia) ;//al volver a declarar la variable con "var" no me tira error y me imprime el nuevo valor. Con "let" es no es posible.

//let país = 'Brasil';

país = 'Uruguay' //las comillas me indican que es de tipo string

país = '1500'; //la variable pais en JS puede pasar de ser de tipo string a numerico(siempre y cuando no sea let) Esto tiene sus ventajas y desventajas.

dos = 2000

resultado = país + dos
console.log(resultado)

console.log('======================================================================')

//constante: no cambia. Deben ser declaradas y asignadas en el mismo momento que las creamos.(Las creo y las inicializo en el mismo momento)
const dni = 40355655
console.log(dni)

//dni = 1215456541
console.log('======================================================================');
console.log('======================================================================')

//operadores matemáticos básicos:  + - * / %
let numUno = 1000; //dato de tipo numérico
let numDos = 5000;

resultado = numUno + numDos;
console.log(`El resultado de la suma es: ${resultado}`);  //log: shortcut 

resultado = numDos - numUno;
console.log(`El resultado de la resta es: ${resultado}`);

resultado = numUno * numDos;
console.log(`El resultado de la multiplicacion es: ${resultado}`);

resultado = numDos / numUno;
console.log(`La división da como resultado: ${resultado}`);

resultado = numDos % numUno; //resto de la division:   ---Módulo---
console.log(`El módulo de la división es: ${resultado}`);

//tipos de datos booleanos:   tienen dos valores: V o F
let verdadero = true;
let falso = false;


















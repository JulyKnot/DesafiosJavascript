/*DESAFIO 1

let nombre = prompt("Ingresa tu nombre");
let apellido = prompt("Ingresa tu apellido");
let anioNacimiento = prompt("Ingresa el anio en que naciste")
let nacimiento = parseInt(anioNacimiento);
const anioActual = 2021

let calcular = anioActual-nacimiento

console.log("Hola",nombre,apellido,",","tu edad es",calcular,"anios,verdad?")*/


/*DESAFIO 2

let saludoEntrada = alert("Hola , bienvenido al bar");
let preguntaEdad = prompt("Cuantos anios tenes?");
let preguntaEdadPars = parseInt(preguntaEdad)
let edadPermitida = 18;

if (preguntaEdad>=edadPermitida){
	alert("Podes pasar")
}

else if (preguntaEdad<edadPermitida){
	alert("No podes pasar")
}
else{
	alert("No ingresaste un numero")
}
*/

/*DESAFIO 3
alert ('Ingrese un numero para saber sus multiplos desde el 1 al 100')

let numero = prompt('Numero')
let numero1= parseInt(numero)

for ( let i=0 ; i<= 100 ; i++){
	resultado = numero1*i

	console.log (numero1+' x '+ i +" = "+ resultado);
}*/

/*DESAFIO 4

alert("Hoy 15% de descuento llevando dos productos!")
let saludo = "Hola! Bienvenido a la tienda , gracias por confiar en nosotros. "
let producto1 = parseInt(prompt("Ingrese el precio del primer producto"))
let producto2 = parseInt(prompt("Ingrese el precio del segundo producto"))
let mensaje = 'Con el 15% de hoy te estas ahorrando : '
const suma = (a,b) => a+b;
const desc =  (x) => x * 0.15;

let total = desc(suma(producto1,producto2));
console.log(saludo + mensaje + '$'+total )*/

/*DESAFIO 5 
class Rollos{
constructor(nombre,precio,exposiciones,ISO) {
	this.nombre= nombre;
	this.precio= precio;
	this.exposiciones= Number(exposiciones);
	this.ISO= Number(ISO);
	}
	
	colocado(){
		console.log("En el rollo "+ (this.nombre) + " salen muy buenas fotos debido a su ISO "+ (this.ISO));
	}

	fotos(){
		console.log("Ya colocado , se pueden sacar " + (this.exposiciones) + " fotos")
	}
}
const rollitos = [];
rollitos.push(new Rollos ("","$1400" ,36,200));
rollitos.push(new Rollos ("Kodak 500T","$1100" ,34,500));
rollitos.push(new Rollos ("T-MAX", "$1900" ,24, 400));

rollitos.colocado();

*/

/*DESAFIO 6*/
const rollitos = [
{ id: 1 , rollo :'Cetro', precio: 1100 , exposiciones: 36 , ISO:200 } ,
{ id: 2 , rollo :'Magia', precio: 1100 , exposiciones: 36 , ISO:200 } ,
{ id: 3 , rollo :'T-MAX', precio: 1900 , exposiciones: 24 , ISO:400 } ,
{ id: 4 , rollo :'Ilford', precio: 2500 , exposiciones: 36 , ISO:200 } ,
{ id: 5 , rollo :'Fomapan', precio: 1700 , exposiciones: 24 , ISO:400 } ,
{ id: 6 , rollo :'Ektachrome', precio: 2900 , exposiciones: 36 , ISO:100 }];

console.log(rollitos);

const barata = rollitos.filter((rollo) => (rollo.precio < 1500));
console.log(barata);
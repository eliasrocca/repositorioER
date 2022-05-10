let nombre = prompt("Ingrese su nombre")
let mail = prompt ("Ingrese su mail para participar")
let pregunta= prompt("Estás interesado en ver nuestros productos?")
let Cristiano = "Si";
if (pregunta == "Si") {
    alert("A continuación verás los productos disponibles.")
// Lista de productos...
    //console.log("Felicidades , ganaste!");
}
else {
    alert("Vuelva prontos")
} 

class remeras{
    constructor(equipo,temporada,dorsal,precio,disponibilidad){
        this.equipo=equipo
        this.temporada=temporada
        this.dorsal=dorsal
        this.precio=precio
        this.disponibilidad=disponibilidad

    }
}

let remeras1= new remeras("Manchester United","2022",7,7000,true)
let remeras2= new remeras("Portugal","2022",7,6300,true)
let remeras3= new remeras("Real Madrid","2009",9,5500,false)
let remeras4= new remeras("Sporting Lisboa","2002",28,9000,true)
let remeras5= new remeras("Juventus","2019",7,5900,false)

const tienda = []
tienda.push(remeras1,remeras2,remeras3,remeras4,remeras5)


let disponibles= tienda.filter(remeras=>remeras.disponibilidad==true)
console.log(disponibles)




let edadIngresada = parseInt(prompt("Ingrese su año de nacimiento"))

function ageRequest () {
    resultado = 2022 - edadIngresada
    alert( "Tu edad es: " +resultado)
    

}

ageRequest()


let boton = document.getElementById("boton-1");
boton.onclick = () => {
    alert("Se apretó el boton")
};
//miFormulario.addEventListener("ENVIAR", validarFormulario);

const availableShirts = [{ id: 1, shirt:"Man Utd", precio:7000},
{ id: 2, shirt:"Juventus", precio:5900},
{ id: 3, shirt:"Real Madrid", precio:5500},
{ id: 4, shirt:"Sporting Lisboa", precio:9000},
{ id: 5, shirt:"Portugal", precio:6300}];
const guardarLocal = (clave, valor) => {localStorage.setItem(clave,valor)};
for (const shirt of availableShirts) {
    guardarLocal(shirt.id, JSON.stringify(shirt));
}
guardarLocal("listaShirts", JSON.stringify(availableShirts));









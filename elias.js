// let nombre = Swal.fire({
//   title:'¿Cual es tu nombre?',
//   text: 'Introduce el nombre aquí',
//   input: 'text',
//   inputPlaceholder: 'Nombre', }) 
//prompt("Ingrese su nombre")
// let mail = prompt ("Ingrese su mail")
// let pregunta= prompt("Estás interesado en ver nuestros productos?")
//let Cristiano = "Si";
// if (pregunta == "Si") {
//   let timerInterval
//   Swal.fire({
//     title: 'Auto close alert!',
//     html: 'I will close in <b></b> milliseconds.',
//     timer: 2000,
//     timerProgressBar: true,
//     didOpen: () => {
//       Swal.showLoading()
//       const b = Swal.getHtmlContainer().querySelector('b')
//       timerInterval = setInterval(() => {
//         b.textContent = Swal.getTimerLeft()
//       }, 100)
//     },
//     willClose: () => {
//       clearInterval(timerInterval)
//     }
//   }).then((result) => {
//     /* Read more about handling dismissals below */
//     if (result.dismiss === Swal.DismissReason.timer) {
//       console.log('I was closed by the timer')
//     }
//   })  
//     //alert("A continuación verás los productos disponibles.")
// // Lista de productos...
//     //console.log("Felicidades , ganaste!");
// }
// else  {
//   Swal.fire({
//     title: 'Are you sure?',
//     text: "You won't be able to revert this!",
//     icon: 'warning',
//     showCancelButton: true,
//     confirmButtonColor: '#3085d6',
//     cancelButtonColor: '#d33',
//     confirmButtonText: 'Yes!',
//   }).then((result) => {
//     if (result.isConfirmed) {
//       Swal.fire(
//         'Vuelva prontos!',
//         'Your file has been deleted.',
//         'success',
//       )
//     }
//   })
  
//   //alert("Vuelva prontos")
// } 

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




// let edadIngresada = parseInt(prompt("Ingrese su año de nacimiento"))

function ageRequest () {
    resultado = 2022 - edadIngresada
    Swal.fire('Tu edad es: ' +resultado)
    //alert( "Tu edad es: " +resultado)
    

}

// ageRequest()




//let boton = document.getElementById("boton-1");
//boton.onclick = function() {    
  //Swal.fire('Enviando formulario')
  //alert("Se apretó el boton")
//};
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


window.onload = function(){
  const form= document.querySelector('.formas');
  form.addEventListener('submit',function(e){
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Formulario enviado',
      showConfirmButton: false,
      timer: 1500
    })
    e.preventDefault()
  console.log(form.elements.correo.value)
  const popup= document.querySelector(".popup")
  console.log(popup)
  popup.classList.remove("activado")
  const body= document.querySelector("body")
  body.classList.remove("bloqueado")
  const objeto={
    nombreYApellido:form.elements.nombre_y_apellido.value,
    Correo: form.elements.correo.value,
    Fecha: form.elements.fecha.value,

  }
  guardarLocal("datosUsuario", JSON.stringify(objeto))
  
  })



//   document.getElementById("boton-1").onclick=function(){
//  alert('Formulario enviado con exito');
//   }
}


// const players= players
// var myHeaders = new Headers();
// myHeaders.append("x-rapidapi-key", "b8531928935a36b749f8eeeeb5e67588");
// myHeaders.append("x-rapidapi-host", "v3.football.api-sports.io");

// var requestOptions = {
//   method: 'GET',
//   headers: myHeaders,
//   redirect: 'follow'
// };

// fetch( "https://v3.football.api-sports.io/players" , requestOptions)
// .then( (res) => {
//   return res.json();
// }) .then( (players) => {
//   console.log(players);

// }).catch(error => console.log('error', error));

const myHeaders = new Headers();
myHeaders.append("x-rapidapi-key", "b8531928935a36b749f8eeeeb5e67588");
myHeaders.append("x-rapidapi-host", "v3.football.api-sports.io");

const requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  }

    const scorers =  fetch("https://v3.football.api-sports.io/players/topscorers?league=2&season=2018", requestOptions)
    .then((res)=>res.json()
    .then((res)=>res)
    .catch((err)=>{"err",err})
    )
    
    
    
    console.log(scorers)

    // const getTopScorers = async ()=>{
    //   const url = "https://v3.football.api-sports.io/players/topscorers?league=2&season=2018"
      
    //   const res = await fetch(url, requestOptions)
      
    //   const data = await res.json()
      
    //   return data
      
    //   }
          
          
          
    //   getTopScorers().then((res)=>console.log(res))

      const url = "https://v3.football.api-sports.io/players/topscorers?league=2&season=2018"
const res = fetch(url,requestOptions).then((res)=>res.json())

res.then((data)=>console.log(data))






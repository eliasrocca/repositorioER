window.onload = function(){
    const boton= document.getElementById('boton-1');
    boton.addEventListener('click',function(e){
    e.preventDefault()
    Swal.fire('Formulario enviado');
    })
  //   document.getElementById("boton-1").onclick=function(){
  //  alert('Formulario enviado con exito');
  //   }
  }


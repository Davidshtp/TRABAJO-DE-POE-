 //para mantener desactivado el boton hacemos lo siguiente
 const boton=document.getElementById("boton");
 boton.disabled= true;

//hacemos la funcion de evaluar el nombre y verificar que tenga mas de 3 caracteres
function evaluarnombre(){
    let nombre=document.getElementById("nombre").value
    let cantidad= nombre.length
    desicion(cantidad);
    //realizamos desicion para poder determinar si es mayor de 3 caracteres o no
};
function desicion(cantidad){
    if(cantidad<3){
        var aviso=document.getElementById("alert");
        aviso.innerHTML=("AVISO, EL NOMBRE TIENE MENOS DE 3 CARACTERES");
        //asi pedimos que el aviso se ponga en negritas desde js
        aviso.style.fontWeight="bold";
    }else{
        document.getElementById('alert').innerHTML = '';
        //para volver a activar el boton
        boton.disabled=false;
    }
   }
// asignamos la referencia del input a una variable para posteriormente agregarle un evento 
let verificar=document.getElementById("nombre");
//el key up realiza el evento cuando termina de pulsarse la tecla es decir cuando se levanta, esta nos permitira que cada vez que
//el usuario termine de escribir un caracter verifiquemos si tiene mas de 3 caracteres o no.
verificar.addEventListener("keyup",evaluarnombre);
//funcion de boton de enviar
function guardar(){
    var guardar=document.getElementById("alert");
    guardar.innerHTML="¡FElICIDADES YA TE REGISTRASTE!"
    guardar.style.fontWeight="bold";
}


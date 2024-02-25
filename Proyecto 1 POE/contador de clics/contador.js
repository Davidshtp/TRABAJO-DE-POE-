//primero obtenemos las referencias 
var contador=document.getElementById("contador");
var modificar=document.getElementById("modificar");
//hacemos la funcion de contador
var x=0;
function contadordeclic(){
    var acumulado=x+1;
    modificar.innerHTML=(acumulado);
    x=acumulado
}
//llamada dinamica de la funcion 
contador.addEventListener("click",contadordeclic);
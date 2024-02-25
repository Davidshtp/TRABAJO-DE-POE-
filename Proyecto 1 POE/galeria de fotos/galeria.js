//obtenemos referencia de los elementos
var imagen=document.getElementById("contenedorimagen");
var cambioimagen=document.getElementById("fulimg")
//creamos funciones para cerrar y abrir imagen 
function cerrarimagen(){
    imagen.style.display="none";
}
function abririmagen(referencia){
    imagen.style.display="flex";
    cambioimagen.src=referencia;
}



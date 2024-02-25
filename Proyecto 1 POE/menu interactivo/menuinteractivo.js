//funcion para volver a la pagina de inicio
function volver(){
    window.location.href="index.html";

}
//funciones para mandar a paginas
function js(){
    window.location.href="js.html"
}
function html(){
    window.location.href="html.html"
}
function ccs(){
    window.location.href="ccs.html"
}
//eventos para CSS
document.getElementById("idcss").addEventListener("mouseover",amarillocss);
document.getElementById("idcss").addEventListener("mouseout",whitecss);
//eventos para JS
document.getElementById("idjs").addEventListener("mouseover",amarillojs);
document.getElementById("idjs").addEventListener("mouseout",whitejs);
//eventos para html
document.getElementById("idhtml").addEventListener("mouseover",amarillohtml);
document.getElementById("idhtml").addEventListener("mouseout",whitehtml);

//funciones de cambio de color css
function amarillocss(){
    document.getElementById("idcss").style.color="yellow"
}
function whitecss(){
    document.getElementById("idcss").style.color="white"
}
//funciones de cambio de color js
function amarillojs(){
    document.getElementById("idjs").style.color="yellow"
}
function whitejs(){
    document.getElementById("idjs").style.color="white"
}
//funciones de cambio de color html
function amarillohtml(){
    document.getElementById("idhtml").style.color="yellow"
}
function whitehtml(){
    document.getElementById("idhtml").style.color="white"
}

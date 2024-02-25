//procedemos a hacer un vector constante con los colores 
var colores=["black","white","green","yellow","red"];
//hacemos la funcion de colores randoms por onclick
function random(){
    const indice=parseInt(Math.random()*colores.length);
    const boton=document.getElementById("xd");
    boton.style.backgroundColor= colores[indice];
}
//hacemos variable que contenga la referencia del boton
var x=document.getElementById("xd");
//agregamos evento al boton y funcion que hace al presionar
x.addEventListener("click",random);

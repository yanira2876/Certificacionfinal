function contact(){
    alert ("Inicio de Sesión exitoso")
}
function cambiarcolorboton(boton){
    boton.textContent = "No Disponible";
    boton.style.backgroundColor = "red";
    boton.style.color = "white";
}
document.getElementById("Ficción").onclick = function(){
    document.getElementById("todos").textContent = "Ficción"
}
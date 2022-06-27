console.log(React)
const mensajeElemento=document.getElementById("mensaje");
const elemento=React.createElement("div",{className:"contenido"},"Hola mundo");
ReactDOM.render(elemento,mensajeElemento)
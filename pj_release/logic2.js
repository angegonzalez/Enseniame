var dataFromlocalStorage = JSON.parse(localStorage.getItem("usuarioLogueado"));
var usuario= document.createTextNode(dataFromlocalStorage);
var entrada= document.getElementById("entrada");
entrada.appendChild(usuario);
var titulotarjeta= document.getElementById("card-user-title");
titulotarjeta.appendChild(usuario);

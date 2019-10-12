var dataFromlocalStorage = JSON.parse(localStorage.getItem("usuarioLogueado"));
var usuario= document.createTextNode(dataFromlocalStorage);
var entrada= document.getElementById("entrada");
entrada.appendChild(usuario);
var titulotarjeta= document.getElementById("card-user-title");
titulotarjeta.appendChild(usuario);

var hora= new Date();
var bienvenida= document.getElementById("mensaje_bienvenida");
var mensajep= document.createElement("p");
mensajep.className="font-weight-light";
mensajep.style="font-size: 30px;";
var mensaje_mañana= document.createTextNode("Buenos dias");
var mensaje_tarde = document.createTextNode("Buenas tardes");
var mensaje_noche = document.createTextNode("Buenas noches");

if(hora.getHours()<=12)
{
    mensajep.appendChild(mensaje_mañana);
    bienvenida.appendChild(mensajep);
}
else if (hora.getHours()>12 && hora.getHours()<=18)
{
    mensajep.appendChild(mensaje_tarde);
    bienvenida.appendChild(mensajep);
}
else 
{
    mensajep.appendChild(mensaje_noche);
    bienvenida.appendChild(mensajep);
}

function serProfesor()
{
    if(confirm("¿Estas seguro de converirte en Profesor?"))
    {
        alert("###Developing###");
    }
}
// TODO: Replace the following with your app's Firebase project configuration
var firebaseConfig = {
  apiKey: "AIzaSyBUKo-7_RNCanGw1_EtGc8bejX5Hk2-Gag",
  authDomain: "angapp-6e8f8.firebaseapp.com",
  databaseURL: "https://angapp-6e8f8.firebaseio.com",
  projectId: "angapp-6e8f8",
  storageBucket: "angapp-6e8f8.appspot.com",
  messagingSenderId: "626239018121",
  appId: "1:626239018121:web:4299c3f1875e764e21e258"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();
var argumento = 1;
var usuarioLogueado;


function login() {
  var bandera=0 ;
  var arrayUsuarios = new Array();
  var arrayContraseñas = new Array();
  var usuario = document.getElementById('txtUser').value;
  usuarioLogueado=usuario;
  localStorage.setItem("usuarioLogueado", JSON.stringify(usuarioLogueado));
  var contraseña = document.getElementById('txtPass').value;
  db.collection("users").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      var users = `${doc.data().username}`;
      var password = `${doc.data().password}`;
      arrayUsuarios.push(users);
      arrayContraseñas.push(password);

    });
    console.log(arrayUsuarios);
    console.log(arrayContraseñas);
    for (i = 0; i < arrayUsuarios.length; i++) {
      if (arrayUsuarios[i] === usuario && arrayContraseñas[i] === contraseña) {
        alert("Hola " + usuario);
        window.location = "Principal.html";
        bandera++;
      }
    }
    if(bandera===0)
    {
      alert("F");
    }

  });
}
function registro() {
  alert("Quiubo");
}
window.addEventListener('mouseover', function (evt) {
  if (evt.target.classList.contains('cambio')) {
    evt.target.style.color = '#90B4D1';
  }
});

// Cuando el mouse salga de encima de algún elemento
window.addEventListener('mouseout', function (evt) {
  if (evt.target.classList.contains('cambio')) {
    evt.target.style.color = '#158FF0';
  }
});


function registro() {
  if (argumento === 1) {
    var tarjeta = document.createElement("div");
    tarjeta.className = "card text-center";
    tarjeta.id = "card_registro";

    var header = document.createElement("div");
    header.className = "card-header"
    var close = document.createElement("button");
    close.type= "button";
    close.className= "close";
    close.setAttribute("aria-label","Close");
    var span= document.createElement("span");
    span.setAttribute("aria-hidden","true");
    var spantext= document.createTextNode("x");
    span.appendChild(spantext);
    close.appendChild(span);
    close.setAttribute("onclick","cerrar()");
    header.appendChild(close);
    tarjeta.appendChild(header);
    
    var tarjeta_body = document.createElement("div");
    tarjeta_body.className = "card-body";
    var titulo = document.createElement("h2");
    titulo.className = "card-title font-weight-bold";
    var contenido = document.createTextNode("Registro");
    titulo.appendChild(contenido);
    tarjeta_body.appendChild(titulo);
    var espacio = document.createElement("br");
    tarjeta_body.appendChild(espacio);
    tarjeta.appendChild(tarjeta_body);
    document.getElementById('registro').appendChild(tarjeta);

    //Agregar input Usuario
    var inputgroup1 = document.createElement("div");
    inputgroup1.className = "input-group input-group-md mb-3";
    var inputsubgroup1 = document.createElement("div");
    inputsubgroup1.className = "input-group-prepend";
    inputgroup1.appendChild(inputsubgroup1);
    var span1 = document.createElement("span");
    var spantext = document.createTextNode("AngCorp Username");
    span1.appendChild(spantext);
    span1.className = "input-group-text";
    inputsubgroup1.appendChild(span1);
    var inputUsername = document.createElement("input");
    inputUsername.setAttribute("aria-describedby", "inputGroup-sizing-sm");
    inputUsername.type = "text";
    inputUsername.id = "txtUsuarioRegistro";
    inputUsername.className = "form-control";
    inputgroup1.appendChild(inputUsername);
    tarjeta_body.appendChild(inputgroup1);

    //Agregar input Contraseña
    var inputgroup1 = document.createElement("div");
    inputgroup1.className = "input-group input-group-md mb-3";
    var inputsubgroup1 = document.createElement("div");
    inputsubgroup1.className = "input-group-prepend";
    inputgroup1.appendChild(inputsubgroup1);
    var span1 = document.createElement("span");
    var spantext = document.createTextNode("Password");
    span1.appendChild(spantext);
    span1.className = "input-group-text";
    inputsubgroup1.appendChild(span1);
    var inputUsername = document.createElement("input");
    inputUsername.setAttribute("aria-describedby", "inputGroup-sizing-sm");
    inputUsername.type = "password";
    inputUsername.id = "txtPassRegistro";
    inputUsername.className = "form-control";
    inputgroup1.appendChild(inputUsername);
    tarjeta_body.appendChild(inputgroup1);

    //Agregar input Verificar Contraseña
    var inputgroup1 = document.createElement("div");
    inputgroup1.className = "input-group input-group-md mb-3";
    var inputsubgroup1 = document.createElement("div");
    inputsubgroup1.className = "input-group-prepend";
    inputgroup1.appendChild(inputsubgroup1);
    var span1 = document.createElement("span");
    var spantext = document.createTextNode("Verify Password");
    span1.appendChild(spantext);
    span1.className = "input-group-text";
    inputsubgroup1.appendChild(span1);
    var inputUsername = document.createElement("input");
    inputUsername.setAttribute("aria-describedby", "inputGroup-sizing-md");
    inputUsername.type = "password";
    inputUsername.id = "txtPassVerRegistro";
    inputUsername.className = "form-control";
    inputgroup1.appendChild(inputUsername);
    tarjeta_body.appendChild(inputgroup1);

    //Agregar boton
    var button = document.createElement("button");
    var buttontext = document.createTextNode("Register");
    button.appendChild(buttontext);
    button.className = "btn btn-outline-dark";
    button.setAttribute("onclick", "registrar()");
    tarjeta_body.appendChild(button);

    argumento++;
  }

}

function registrar() {
  var usuario= document.getElementById("txtUsuarioRegistro").value;
  var contraseña= document.getElementById("txtPassRegistro").value;
  var contraseñaver= document.getElementById("txtPassVerRegistro").value;
  if( usuario!== "" && contraseña!=="" && contraseñaver!== "" && contraseña===contraseñaver)
  {
    db.collection("users").add({
      username: usuario,
      password: contraseña,
    })
      .then(function (docRef) {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch(function (error) {
        console.error("Error adding document: ", error);
      });
  
    cerrar();
  }
  else
  {
    alert("F");
  }
}
function cerrar()
{
  var card = document.getElementById("card_registro");
    card.remove();
    argumento--;
}
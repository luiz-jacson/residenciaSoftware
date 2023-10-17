var usuarios = [{
    "user": "luiz",
    "password": "123"
}]

var user = document.getElementById("usuario")
var senha = document.getElementById("senha")
var botaoLogin = document.getElementById("botaoLogin")
var formulario = document.getElementById("form")

botaoLogin.onclick = function(){
    formulario.onsubmit = function(event){
        event.preventDefault();
    }
    let logou = false
    for(var i = 0 ; i < usuarios.length; i++){
        if(usuarios[i].user == user.value && usuarios[i].password == senha.value){
            logou = true
            window.location.href = "../professorView/index.html";
        }else{
            alert("nao logou")
        }
    }
}
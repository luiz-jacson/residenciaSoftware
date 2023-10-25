const usuarios = [{
        "id": 1,
        "user": "aluno",
        "userName": "aluno da silva",
        "password": "123",
        "tipoUsuario": "aluno"
    },
    {
        "id": 2,
        "user": "professor",
        "userName": "professor da silva",
        "password": "123",
        "tipoUsuario": "professor"
    },
    {
        "id": 3,
        "user": "responsavel",
        "userName": "responsável da silva",
        "password": "123",
        "tipoUsuario": "responsavel"
    },
    {
        "id": 4,
        "user": "coordenador",
        "userName": "coordenador da silva",
        "password": "123",
        "tipoUsuario": "coordenador"
    },
    ]



var user = document.getElementById("usuario")
var senha = document.getElementById("senha")
var botaoLogin = document.getElementById("botaoLogin")
var formulario = document.getElementById("form")

botaoLogin.onclick = function(){
    var invalidLabel = document.getElementById('usuarioInvalido')
    formulario.onsubmit = function(event){
        event.preventDefault();
    }
    let logou = false
    for(var i = 0 ; i < usuarios.length; i++){
        if(usuarios[i].user == user.value && usuarios[i].password == senha.value){
            logou = true
            window.location.href = "../professorView/index.html";
            break;
        }else{
            console.log(user.value)
            console.log(senha.value)
        }
    }
    if(logou == false){
        console.log(invalidLabel)
        console.log(logou)
        invalidLabel.setAttribute('style', 'color: red;margin-bottom: 10px;')
        invalidLabel.style.display = "block";
    }
}

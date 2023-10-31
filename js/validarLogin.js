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
if (botaoLogin) {
    botaoLogin.onclick = function () {
        var invalidLabel = document.getElementById('usuarioInvalido')
        formulario.onsubmit = function (event) {
            event.preventDefault();
        }
        let logou = false
        for (var i = 0; i < usuarios.length; i++) {
            if (usuarios[i].user == user.value && usuarios[i].password == senha.value) {
                logou = true
                if (usuarios[i].tipoUsuario == 'aluno') {
                    window.location.href = "../alunoView/index.html";
                }
                if (usuarios[i].tipoUsuario == 'professor') {
                    window.location.href = "../professorView/index.html";
                }
                localStorage.setItem('usuario', JSON.stringify(usuarios[i]));
                break;
            } else {
                console.log(user.value)
                console.log(senha.value)
            }
        }
        if (logou == false) {
            console.log(invalidLabel)
            console.log(logou)
            invalidLabel.setAttribute('style', 'color: red;margin-bottom: 10px;')
            invalidLabel.style.display = "block";
        }
    }
}

const verificaSessao = () => {
    let sessao = localStorage.getItem('usuario') ? JSON.parse(localStorage.getItem('usuario')) : null;
    if (sessao == null && JSON.parse(localStorage.getItem('sessao')) == 'naoVerificada') {
        localStorage.setItem('sessao', 'verificada');
        window.location.href = "../login/index.html";
    }else if( sessao != null ){
        console.log(sessao)
        localStorage.setItem('sessao', 'naoVerificada');
    }
};

document.addEventListener('DOMContentLoaded', function () {
    verificaSessao();
});

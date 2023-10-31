
const usuarios = [{
    "id": 1,
    "user": "aluno",
    "userName": "Aluno da silva",
    "password": "123",
    "tipoUsuario": "aluno",
    "matricula" : "1234"
},
{
    "id": 2,
    "user": "professor",
    "userName": "Professor da silva",
    "password": "123",
    "tipoUsuario": "professor",
    "matricula" : "5678"
},
{
    "id": 3,
    "user": "responsavel",
    "userName": "Responsável da silva",
    "password": "123",
    "tipoUsuario": "responsavel",
    "matricula" : "91011"
},
{
    "id": 4,
    "user": "coordenador",
    "userName": "Coordenador da silva",
    "password": "123",
    "tipoUsuario": "coordenador",
    "matricula" : "1112"
},
]



var user = document.getElementById("usuario")
var senha = document.getElementById("senha")
var botaoLogin = document.getElementById("botaoLogin")
var botaoSair = document.getElementById('botaoSair')
var formulario = document.getElementById("form")
if (botaoLogin) {
    botaoLogin.onclick = function () {
        verificaSessao().then(() => {
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
                }
            }
            if (logou == false) {
                invalidLabel.setAttribute('style', 'color: red;margin-bottom: 10px;')
                invalidLabel.style.display = "block";
            }
        })

    }
}


const updateSessao = async(usuario) => {
    let tipoUsuario = document.getElementById('tipoUsuario')
    let matricula = document.getElementById('matricula')
    tipoUsuario.innerHTML = usuario.tipoUsuario.charAt(0).toUpperCase() + usuario.tipoUsuario.substring(1) + ': ' + usuario.userName
    matricula.innerHTML = 'Matrícula: ' + usuario.matricula
}


const verificaSessao = async () => {
    var pagina = document.getElementById("body-pd")
    let sessao = localStorage.getItem('usuario') ? JSON.parse(localStorage.getItem('usuario')) : null;
    if (sessao == null && localStorage.getItem('sessao') == 'naoVerificada') {
        if (pagina) {
            pagina.setAttribute('style', 'display:none')
        }
        localStorage.setItem('sessao', 'verificada');
        if (!window.location.href.includes("login")) {
            window.location.href = "../login/index.html";
        }
    } else if (sessao != null) {
        if (pagina) {
            pagina.setAttribute('style', '')
        }
        updateSessao(sessao).then(() => {
            if(sessao.tipoUsuario == 'professor'){
                if(window.location.href.includes("alunoView") || window.location.href.includes("login") ){
                    window.location.href = "../professorView/index.html"; 
                }
            }
            if(sessao.tipoUsuario == 'aluno'){
                if(window.location.href.includes("professorView") || window.location.href.includes("login") ){
                    window.location.href = "../alunoView/index.html"; 
                }
            }
            localStorage.setItem('sessao', 'naoVerificada');
        })
    } else {
        if (pagina) {
            pagina.setAttribute('style', '')
        }
        localStorage.setItem('sessao', 'naoVerificada');
    }


};


if (botaoSair) {
    botaoSair.onclick = function () {
        Swal.fire({
            title: 'Deseja sair?',
            titleColor: `#011633`,
            titleFontSize: `10px`,
            showDenyButton: true,
            confirmButtonText: 'Sim',
            denyButtonText: `Não`,
            confirmButtonColor: `#011633`,
            denyButtonColor: `gray`,
            width: `35vh`,
            customClass: {
                title: 'custom-swal-title-font',
            }
        }).then((result) => {
            if (result.isConfirmed) {
                localStorage.removeItem('sessao')
                localStorage.removeItem('usuario')
                window.location.href = "../login/index.html";
            }
        })
    }
}

document.addEventListener('DOMContentLoaded', function () {
    verificaSessao();
})


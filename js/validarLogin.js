
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
        })

    }
}

const verificaSessao = async () => {
    var pagina = document.getElementById("body-pd")
    console.log(pagina)
    let sessao = localStorage.getItem('usuario') ? JSON.parse(localStorage.getItem('usuario')) : null;
    console.log(sessao)
    if (sessao == null && localStorage.getItem('sessao') == 'naoVerificada') {
        console.log('aqui')
        if (pagina) {
            pagina.setAttribute('style', 'display:none')
        }
        localStorage.setItem('sessao', 'verificada');
        console.log(window.location.href)
        if (!window.location.href.includes("login")) {
            window.location.href = "../login/index.html";
        }
    } else if (sessao != null) {
        if (pagina) {
            pagina.setAttribute('style', '')
        }
        console.log('aqui2')
        console.log(sessao)
        localStorage.setItem('sessao', 'naoVerificada');
    } else {
        if (pagina) {
            pagina.setAttribute('style', '')
        }
        console.log('aqui3')
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
                localStorage.removeItem('usuario')
                window.location.href = "../login/index.html";
            }
        })
    }
}

document.addEventListener('DOMContentLoaded', function () {
    verificaSessao();
})


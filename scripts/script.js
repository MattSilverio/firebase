var authForm = document.getElementById("authForm")
var authFormTitle = document.getElementById("authFormTitle")

var register = document.getElementById("register")
var access = document.getElementById("access")

function toggleToRegister(){
    authForm.submitAuthForm.innerHTML = 'Cadastrar conta'
    authFormTitle.innerHTML = 'Insira seus dados para se cadastrar'

    hideItem(register)
    showItem(access)
}

function toggleToAccess(){
    authForm.submitAuthForm.innerHTML = 'Acessar'
    authFormTitle.innerHTML = 'Acesse a sua conta'

    hideItem(register)
    showItem(access)
}

function showItem(element){
    element.style.display = 'block'
}

function hideItem(element){
    element.style.display = 'none'
}
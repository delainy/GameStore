const container = document.querySelector(".container"),
      pwShowHide = document.querySelectorAll(".showHidePw"),
      pwFields = document.querySelectorAll(".password"),
      singUp = document.querySelectorAll(".sigup-link"),
      login = document.querySelectorAll(".login-link");

      pwShowHide.forEach(eyeIcon => {
        eyeIcon.addEventListener("click", () =>{
          pwFields.forEach(pwField => {
            if(pwField.type ==="password"){
              pwField.type = "text";

              pwShowHide.forEach(icon =>{
                icon.classList.replace("ri-eye-off-line","ri-eye-line")
              });
            }else{
              pwField.type = "password";

              pwShowHide.forEach(icon =>{
                icon.classList.replace("ri-eye-line","ri-eye-off-line")
              });
            }
          });
        });
      });

//Validação de formulario

let form = document.getElementById("form");
let username = document.getElementById("username")
let email = document.getElementById("email")
let senha = document.getElementById("senha")

let msgSuccess = document.querySelector('#msg-success')

form.addEventListener("submit", (e)=>{
    e.preventDefault()

    checkInputs()
})

function checkInputs(){
    let usernameValue = username.value.trim()
    let emailValue = email.value.trim()
    let senhaValue = senha.value.trim()

    if(usernameValue && emailValue && senhaValue === ''){
        //mostrar o erro
        //adicionar a classe error
        errorValidation(username, 'Preencha esse campo');
    }else{
        //Decidir criar meu localStorage aqui
        //se não existir ele apenas cria um array vazio, se não apenas preenche
        let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]');

        listaUser.push(
        {
            nome: usernameValue,
            email: emailValue,
            senha: senhaValue
        }
        )

        localStorage.setItem('listaUser', JSON.stringify(listaUser));

        msgSuccess.setAttribute('style', 'display: block');
        msgSuccess.innerHTML = 'Cadastrado com Sucesso'

        setTimeout(() =>{
            window.location.href = 'http://127.0.0.1:5500/Login.html'
        }, 3000);
    }
}
//error
function errorValidation(input, messager){
    let formControl = input.closest('.input-field');
    let small = formControl.querySelector('small');
    small.innerText = messager;

    formControl.classList.add('error');
}
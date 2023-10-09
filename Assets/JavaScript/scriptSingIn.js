
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

// Autenticação de Login

let OpenSingIn = document.querySelector('#submit');

OpenSingIn.addEventListener('click', () =>{
  let emailSing = document.querySelector('#email');
  let passWordSing = document.querySelector('#password')

  let msgError = document.querySelector('#msg-error')
  let divInput = document.querySelector('.input-field input')
  let divIcon = document.querySelector('.input-field i')

  let listaUser = []

  let userValid = {
    nome: '',
    email: '',
    senha: ''
  }

  listaUser = JSON.parse(localStorage.getItem('listaUser'))
  
  //Percorre o meu array listaUser e valida se existe o meu usuario com o mesmo email e senha ja cadastrados
  listaUser.forEach((item) =>{
    if(emailSing.value === item.email && passWordSing.value === item.senha){

      userValid = {
      nome: item.nome,
			email: item.email,
			senha: item.senha
		}

    }
  });

  if(emailSing.value === userValid.email && passWordSing.value === userValid.senha){

    setTimeout(() =>{
      window.location.href = `http://127.0.0.1:5500/products.html?username=${userValid.nome}`
    }, 000);

  }else{
    
	  divIcon.setAttribute('style', 'color: #DA2115;')
	  divInput.setAttribute('style', 'border-bottom: 2px solid #DA2115')
	  msgError.setAttribute('style', 'display: block')
	  msgError.innerHTML = 'Email ou senha Incorreta'
  }

})


buttonSemiAno.setAttribute('style', 'border: 3px solid #3498DB;');
buttonAno.setAttribute('style', 'border: 1px solid #000;');

buttonSemiAno.setAttribute('style', 'border: 1px solid #000;');
buttonAno.setAttribute('style', 'border: 3px solid #3498DB;');
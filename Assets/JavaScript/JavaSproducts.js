const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const username = urlParams.get('username');
console.log(`Welcome, ${username}!`);


const ImgPerfil = document.querySelector(".imgPerfil");

// URL da API com o nome de usuário
const apiUrl = `https://api.dicebear.com/6.x/initials/svg?seed=${username}`;

//atributo src do elemento de imagem existente para o URL da API
ImgPerfil.src = apiUrl;

// Menu suspenso do Navbar 
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('bx');
    navbar.classList.toggle('open');
}

//carrossel janela Modal
let count = 1;
document.getElementById('slide1').checked = true
setInterval(function(){
    nextImage()
},3000)

function nextImage(){
    count++;
    if(count > 5){
        count = 1;
    }

    document.getElementById('slide'+ count).checked = true
}

gamesJson.map((item) => {

    let card = document.createElement('div');
    card.classList.add('card',item.category , 'hide');

    let cardImage = document.createElement('div');
    cardImage.classList.add('card-image');
    card.appendChild(cardImage);

    let image = document.createElement('img');
    image.setAttribute('src', item.img);
    image.classList.add('Painel');
    cardImage.appendChild(image);

    let cardText = document.createElement('div');
    cardText.classList.add('card-text');
    card.appendChild(cardText);

    let gameDescription = document.createElement('h6');
    gameDescription.classList.add('game-description');
    gameDescription.innerText = item.description;
    cardText.appendChild(gameDescription);

    let cardUser = document.createElement('div');
    cardUser.classList.add('card-user');
    cardText.appendChild(cardUser);

    let userImage = document.createElement('img');
    userImage.setAttribute('src', 'Assets/Img/imagem-do-usuario-com-fundo-preto.png');
    cardUser.appendChild(userImage);

    let username = document.createElement('span');
    username.textContent = 'Joshe Flinston';
    cardUser.appendChild(username);

    let gameName = document.createElement('h5');
    gameName.classList.add('game-name');
    gameName.innerText = item.name
    cardText.appendChild(gameName);

    let cardRef = document.createElement('div');
    cardRef.classList.add('card-ref');
    cardText.appendChild(cardRef);

    let line = document.createElement('span');
    line.classList.add('line');
    cardRef.appendChild(line);

    let gameType = document.createElement('p');
    gameType.textContent = 'Game';
    cardRef.appendChild(gameType);

    let cardPrice = document.createElement('div');
    cardPrice.classList.add('card-price-card');
    cardText.appendChild(cardPrice);

    let price = document.createElement('span');
    price.innerHTML = `$ ${item.price.toFixed(2)}` 
    cardPrice.appendChild(price);

    let buttonCard = document.createElement('div');
    buttonCard.classList.add('button-card');
    cardText.appendChild(buttonCard);

    let buttonCardButton = document.createElement('button');
    buttonCardButton.classList.add('button-card-button');
    buttonCardButton.textContent = 'Adicionar ao carrinho';
    buttonCard.appendChild(buttonCardButton);


    document.querySelector('.nav-category').appendChild(card);
});



//Janela Modal
let clickModal = document.getElementsByClassName("card-image");
    for(let i = 0; i < clickModal.length; i++){
        let button = clickModal[i];
        button.addEventListener('click', modalFunction)
}

function modalFunction(event) {

    let gameWindowArea = document.querySelector('.gameWindowArea');
    gameWindowArea.style.display = 'flex';

    const Element = event.target.closest('.card');
    const titleModal = Element.querySelector('.game-name').textContent;
    const Descric = Element.querySelector('.game-description').textContent;
    
    let title = document.querySelector('.titulo-modal-title');
    title.innerText = titleModal
    let description = document.querySelector(".descri-model p");
    description.innerText = Descric

    let img = document.getElementById(".image1 img");

    let modal = document.getElementById('modal');
    modal.classList.remove('hide');
  
    
    let closeButton = modal.querySelector('.close-modal');
    closeButton.addEventListener('click', function() {
        gameWindowArea.style.display = 'none';
    });
}



//Carrinho de compras

let cartIcon = document.querySelector('#open-cart');// Variavel selecionando o icone de card do header
let cartElement = document.querySelector('.cart-cart');//Variavel selecionando a classe de elemento do meu cart
let closeCart = document.querySelector('#close-cart');//Variavel selecionando meu icone de fechamento do cart

//Abrindo o elemento do carrinho
cartIcon.onclick = () =>{
    cartElement.style.display = "block"
}
//Fechando o elemento do carrinho
closeCart.onclick = () =>{
    cartElement.style.display = "none"
}

//funcional
if (document.readyState == 'loading'){//O Document.readyState tem por objetivo identificar o status de carregamento de um documento
    //loading Informa se um documento está sendo carregado (loaded).
    document.addEventListener('DOMContentLoaded', ready)
}else{
    ready();
}

function ready(){

    //add carrinho
    var buttonCardButton = document.getElementsByClassName('button-card-button');
    for(var i = 0; i < buttonCardButton.length; i++){
        var button = buttonCardButton[i];
        button.addEventListener('click', handleAddToCart);
    }

    toUpdateCart()
}

let cart = [];

// inicializar carrinho do localStorage
const savedCart = localStorage.getItem('cart');
if (savedCart) {
  cart = JSON.parse(savedCart);
} else {
  cart = [];
}

function handleAddToCart(event) {
    const gameNameElement = event.target.closest('.card');
    const title = gameNameElement.querySelector('.game-name').textContent;
    const price = gameNameElement.querySelector('.card-price-card').textContent;
    const img = gameNameElement.querySelector('.card-image img').src;
        
    addProductToCart(title, price, img);
}

function addProductToCart(title, price, img){
    cart.push({title, price, img})
    toUpdateCart();

}

//Atualizar Carrinho
function toUpdateCart() {
    let cartItens = document.querySelector('.cart-content');
    cartItens.innerHTML = '';

    cart.forEach((product, index) => {
        let cartshopBox = document.createElement("div");
        cartshopBox.classList.add('cart-box');

        let cartBoxContent = `
            <img src="${product.img}" alt="" class="cart-image">
            <div class="detail-box">
                <div class="cart-product-title"><h3>${product.title}</h3></div>
                <div class="cart-price">${product.price}</div>
            </div>
            <i class='bx bxs-trash-alt cart-remove' data-index="${index}"></i>
        `;
        cartshopBox.innerHTML = cartBoxContent;
        cartItens.appendChild(cartshopBox);
    });

    // Ouvinte de evento para remover itens ao clicar no ícone da lixeira
    cartItens.addEventListener('click', (event) => {
        if (event.target.classList.contains('cart-remove')) {
            let index = event.target.getAttribute('data-index');
            cart.splice(index, 1);
            toUpdateCart();
        }
    });

    let totalCart = document.querySelector(".total-price");
    let total = cart.reduce((total,product) => total += parseFloat(product.price.replace("$", "")), 0)
    totalCart.innerHTML = `R$ ${total.toFixed(2)}`;

    // salvar carrinho no localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
}


//Categoria de Produtos

function filterProduct(value){

    let buttons = document.querySelectorAll(".button-value");

    buttons.forEach((button)=>{
        if(value.toUpperCase() == button.innerText.toUpperCase()){
            button.classList.add("active");
        }else{
            button.classList.remove("active");
        }
    });

    //selecionar os cards
    let elements = document.querySelectorAll(".card");

    elements.forEach((element) => {

        if(value == "Todos"){
            element.classList.remove("hide");
        }else{

            if(element.classList.contains(value)){

                element.classList.remove("hide");
            }else{
                element.classList.add("hide");
            }
        }
    });

}

//Filtro de Produtos
const searchInput = document.querySelector('#filter');

// adiciona um evento de listener ao input de busca
searchInput.addEventListener('keyup', function(event) {

  const cards = document.querySelectorAll('.card');

  cards.forEach(function(card) { 

    const gameName = card.querySelector('.game-name');//Titulo do meu card

    const gameNameText = gameName.textContent.toLowerCase(); //texto do elemento "game-name"

    const userInput = event.target.value.toLowerCase(); //texto de entrada do usuário e converte para minúsculas

    // verifica se o texto de entrada do usuário está presente no nome do jogo
    if (gameNameText.includes(userInput)) {
      // se estiver, exibe o card
      card.classList.remove('hide');
    } else {
      // se não estiver, oculta o card
      card.classList.add('hide');
    }
  });
});

window.onload = () => {
    filterProduct("Todos");
}


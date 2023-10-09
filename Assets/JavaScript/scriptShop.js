const savedCart = localStorage.getItem('cart');//verifica se o savedCart existe no localStorage
const cart = savedCart ? JSON.parse(savedCart) : [];//converte a string JSON em um objeto JavaScript usando JSON.parse()

let container = document.querySelector(".container")
    container.innerHTML = '';

cart.map((item) => {

    let itemElement = document.createElement("div");
    itemElement.classList.add('item');

    let itemCard = `
                <div class="itemImg">
                    <img src="${item.img}" alt="item do carrinho">
                </div>
                <div class="itemTEXT">
                    <div class="itemTitle">
                        <h2>${item.title}</h2>
                    </div>
                    <div class="price">
                        <p>${item.price}</p>
                    </div>
                    <p class="description">Descrição: É um jogo festa royale gratuito, multiplataforma e multijogador, no qual você e os outros competidores disputam em rodadas com caos absurdo e crescente em pistas de obstáculos até restar um vencedor sortudo!</p>
                </div>
    `

    itemElement.innerHTML = itemCard
    container.appendChild(itemElement);

});

function getTotalPrice(cart) {
    let totalPrice = 0;
    for (let i = 0; i < cart.length; i++) {
      totalPrice += parseFloat(cart[i].price.replace("$", ""));
    }
    return totalPrice.toFixed(2);
}

let price = document.querySelector(".priceTotal");
price.textContent = getTotalPrice(cart);


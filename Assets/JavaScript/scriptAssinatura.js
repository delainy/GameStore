const buttonSemiAno = document.querySelector('.button-semi-ano');
const buttonAno = document.querySelector('.button-ano');
const priceElement = document.querySelector('.price');

updatePriceOnClick(buttonSemiAno, buttonAno, priceElement);

function updatePriceOnClick(buttonSemiAno, buttonAno, priceElement) {
    buttonSemiAno.addEventListener('click', () => {
    priceElement.innerHTML = '15';
    buttonSemiAno.setAttribute('style', 'border: 3px solid #3498DB;');
    buttonAno.setAttribute('style', 'border: 1px solid #000;');
    console.log('New price:', priceElement.innerHTML);
    });
  
    buttonAno.addEventListener('click', () => {
    priceElement.innerHTML = '30';
    buttonSemiAno.setAttribute('style', 'border: 1px solid #000;');
    buttonAno.setAttribute('style', 'border: 3px solid #3498DB;');
    console.log('New price:', priceElement.innerHTML);
    });
}
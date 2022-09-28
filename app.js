const price = document.getElementById('price')
const tip = document.getElementById('tip')
const people = document.getElementById('people')
const calculateBtn = document.getElementById('calculateBtn')
const displayAmount = document.getElementById('displayAmt')



calculateBtn.addEventListener('click', () => {
    displayAmount.innerHTML = calculation(price.value, tip.value, people.value)
})

function calculation(price1, tip1, people1){
    return  price1 * ((tip1 / 100) / people1);
}





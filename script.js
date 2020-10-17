AOS.init();

const display = document.querySelector('#display')
const generateButton = document.querySelector("#generate")
const minimumInput = document.querySelector('#minimum')
const maximumInput = document.querySelector('#maximum')

function random(range) {
    return Math.floor(Math.random() * range)
}

function randomRange() {
    const minimumValue = parseInt(minimumInput.value)
    const maximumValue = parseInt(maximumInput.value)

    let randomNumber = random(maximumValue - minimumValue) + minimumValue

    display.innerHTML = randomNumber
}

generateButton.addEventListener("click", randomRange)

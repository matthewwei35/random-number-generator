// Initialize AOS
AOS.init();

// Selects elements in index.html
const display = document.querySelector('#display')
const generateButton = document.querySelector("#generate")
const minimumInput = document.querySelector('#minimum')
const maximumInput = document.querySelector('#maximum')

/**
 * Creates a random number in the given range
 * @param {*} range Difference between lowest and highest values
 */
function random(range) {

    // Returns random number
    return Math.floor(Math.random() * range)
}

/**
 * Displays a random number of the given range
 */
function randomRange() {

    // Store value of minimumInput and maximumInput into variables and converts them into integer
    const minimumValue = parseInt(minimumInput.value)
    const maximumValue = parseInt(maximumInput.value)

    // Calculates and stores random number using random()
    let randomNumber = random(maximumValue - minimumValue) + minimumValue

    // Display randomNumber to user
    display.innerHTML = randomNumber
}

// Activates function once button is clicked
generateButton.addEventListener("click", randomRange)

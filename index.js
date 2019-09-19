//Constants
var coinText = document.getElementById("coinText")

var coins = 0

function update() {
    coins++
    updateCoins()
}

function updateCoins() {
    coinText.innerHTML = "Coins: " + coins
}
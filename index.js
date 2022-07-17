let cards = []
let sum = 0
let hasBlackJack = false
var isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")
let startEl = document.getElementById("start-el")

//Creating an OBJECT
let player = {
    name: "Szabi",
    chips: 250
}

function refreshChips(){
    playerEl.textContent = player.name + ": $" + player.chips   
    if(player.chips === 0){
        messageEl.textContent = "Out of money."
    }
    startEl.textContent = "PLAY AGAIN"
    
}



playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard(){
    randomNumer = Math.floor(Math.random() * 13) + 1
    if(randomNumer > 10){
        return 10
    }
    else if(randomNumer === 1){
        return 11
    }
    else{
        return randomNumer
    }
}

function startGame(){
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard

    renderGame() 
}



function renderGame(){
    sumEl.textContent = "Sum: " + sum
    cardsEl.textContent = "Cards: "
    for(let i = 0; i < cards.length; i++){
        cardsEl.textContent += cards[i] + " "
    }
    
    if(sum < 21){
        message = "Do you want to draw a new card? 🤔"
    }
    else if(sum === 21){
        hasBlackJack = true
        message = "Wohoo! You've got Blackjack! 🤑"
        player.chips += 300
        refreshChips()
        hasBlackJack = false
        
    }
    else{
        isAlive = false
        message = "You're out of the game! 🥺"
        player.chips -= 25
        refreshChips()
        
    }
    console.log(message)

    messageEl.textContent = message

}

function newCard(){
    if(isAlive === true && hasBlackJack === false) {
        console.log("Drawing a new card from the deck!")
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    }
    
}
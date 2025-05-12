let currentPlayer = 'none'

//DOM Elements
const playerO = document.querySelector('#playerO')
const playerX = document.querySelector('#playerX')
const boxes = document.querySelectorAll('.box')

//Event Listeners
playerO.addEventListener ('click', () => {currentPlayer = 'O'
    console.log('current player:', currentPlayer)
    showCurrentPlayer()
})

playerX.addEventListener ('click', () => {currentPlayer = 'X'
    console.log('current player:', currentPlayer)
    showCurrentPlayer ()
})

boxes.forEach((box) => {box.addEventListener('click',  function() {
    console.log(this.classList) //check it has successfully selected the box
    if (this.textContent === '' && currentPlayer != 'none') {
        this.textContent = currentPlayer
      if (currentPlayer === 'X') {
        this.style.color = 'white';
        this.style.backgroundColor = 'rgb(163, 64, 64)';}
             else if (currentPlayer === 'O') {
        this.style.color = 'white';
        this.style.backgroundColor = 'rgb(53, 116, 66';}
    }
})})

//Show Player Function
function showCurrentPlayer() {
if(currentPlayer === 'X') {
    playerO.style.color = 'black'
    playerO.style.backgroundColor = 'rgba(255, 255, 255, 0)'
    playerX.style.color = 'white'
    playerX.style.backgroundColor = 'rgb(163, 64, 64)'
    console.log('text is red')
}
else if(currentPlayer === 'O') {
    playerX.style.color = 'black'
    playerX.style.backgroundColor = 'rgba(255, 255, 255, 0)'
    playerO.style.color = 'white'
    playerO.style.backgroundColor = 'rgb(53, 116, 66)'
    console.log('text is blue')
    playerDOMText.style.backgroundColor = 'rgba(128, 210, 237, 0.312)'
}
}

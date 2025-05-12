let currentPlayer = 'none'

const playerO = document.querySelector('#playerO')
const playerX = document.querySelector('#playerX')

playerO.addEventListener ('click', () => {currentPlayer = 'O'
    console.log('current player:', currentPlayer)
    showCurrentPlayer()
})

playerX.addEventListener ('click', () => {currentPlayer = 'X'
    console.log('current player:', currentPlayer)
    showCurrentPlayer ()
})

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

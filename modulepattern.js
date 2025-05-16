//the Gameboard inside of a Module pattern using encapsulation

const Gameboard = function() {
    let board = ['','','','','','','','','']
    let currentPlayer = 'none'
    let playerO
    let playerX
    let boxes

function DomElements() {
    playerO = document.querySelector('#playerO')
    playerX = document.querySelector('#playerX')
    boxes = document.querySelectorAll('.box')
    playerO.addEventListener ('click', () => {currentPlayer = 'O'
    console.log('current player:', currentPlayer)
    playerDisplay(currentPlayer)
})

playerX.addEventListener ('click', () => {currentPlayer = 'X'
    console.log('current player:', currentPlayer)
    playerDisplay(currentPlayer)
})

boxes.forEach((box) => {box.addEventListener('click',  function() {
    console.log(this.classList) //check it has successfully selected the box

    if (this.textContent === '' && currentPlayer != 'none') {
        const boxIndex = parseInt(this.classList[1]) //get the second class set of the box and use it as the index
        console.log('BI:', boxIndex)
        const playerMove = cells(boxIndex, currentPlayer) //pass the second class of the object clicked as the index of the item in the gameboard array and set the value to the current player X or O
        console.log('Gameboard:', board)

        if (playerMove) {
    this.textContent = currentPlayer

      if (currentPlayer === 'X') {
        this.style.color = 'white';
        this.style.backgroundColor = 'rgb(163, 64, 64)'
        winner(currentPlayer)
        // checkWins(currentPlayer)
        currentPlayer = 'O'; //switch current player BEFORE auto-switching
        playerDisplay(currentPlayer)
        }
        

        else if (currentPlayer === 'O') {
        this.style.color = 'white';
        this.style.backgroundColor = 'rgb(53, 116, 66'
        winner(currentPlayer)
        // checkWins(currentPlayer)
        currentPlayer = 'X';
        playerDisplay(currentPlayer)
        }

        }
      
    }
playerDisplay(currentPlayer)}
)})
}
 
    const getBoard = function () {
        return board
    }
    const cells = function(index, player) {
        if (board[index] === '') {
            board[index] = player
            return true
}
            return false
    }

    const winner = function(player) {
        const wins = [
                [0,1,2], [3,4,5], [6,7,8],//columns
                [0,3,6], [1,4,7], [2,5,8], //rows
                [0,4,8], [6,4,2]//diagonals
            ]
        
        for (i = 0; i < wins.length; i++) {
    const check = wins[i]
    const a = board[check[0]]
    const b = board[check[1]]
    const c = board[check[2]]
       
    if (a === player && b === player && c === player) {
        console.log('winner:', player)
        const winnerText = document.createElement('div')
        winnerText.classList = 'winAnnouncement'
        winnerText.textContent = `Player '${player}' Wins!`
        
        if (player === '') {
            winnerText.style.color = 'rgb(163, 64, 64)'
        }
        else {
            winnerText.style.color = 'rgb(53, 116, 66)'
        }
        document.body.appendChild(winnerText)
        board = ['','','','','','','','','']
        console.log('reset board:', board)
        setTimeout(() => reset(winnerText), 2000)
        return true
        //create append to DOM function
    }
    }
}
const playerDisplay = function(currentPlayer){
        if(currentPlayer === 'X') {
    playerO.style.color = 'black'
    playerO.style.backgroundColor = 'rgba(255, 255, 255, 0)'
    playerX.style.color = 'white'
    playerX.style.backgroundColor = 'rgb(163, 64, 64)'
}
else if(currentPlayer === 'O') {
    playerX.style.color = 'black'
    playerX.style.backgroundColor = 'rgba(255, 255, 255, 0)'
    playerO.style.color = 'white'
    playerO.style.backgroundColor = 'rgb(53, 116, 66)'
}}
const reset = function(winnerTextDiv){
 board = ['','','','','','','','',''],
      
 console.log('game reset:', board)
      boxes.forEach((box) => {
        box.textContent = ''
        box.style.backgroundColor = ''
        box.style.color = ''
      })
      currentPlayer = 'none'
      setTimeout(() => {document.body.removeChild(winnerTextDiv)}, 1000)
}
return {
        DomElements: DomElements,
        getBoard: getBoard,
        cells: cells,
        winner: winner,
        player: playerDisplay,
        reset: reset
}}

window.onload = function() {
    Gameboard().DomElements()
}
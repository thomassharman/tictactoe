let currentPlayer = 'none'
//DOM Elements
const playerO = document.querySelector('#playerO')
const playerX = document.querySelector('#playerX')
const boxes = document.querySelectorAll('.box')

//Event Listeners
playerO.addEventListener ('click', () => {currentPlayer = 'O'
    console.log('current player:', currentPlayer)
    Gameboard.player(currentPlayer)
})

playerX.addEventListener ('click', () => {currentPlayer = 'X'
    console.log('current player:', currentPlayer)
    Gameboard.player(currentPlayer)
})

boxes.forEach((box) => {box.addEventListener('click',  function() {
    console.log(this.classList) //check it has successfully selected the box

    if (this.textContent === '' && currentPlayer != 'none') {
        const boxIndex = parseInt(this.classList[1]) //get the second class set of the box and use it as the index
        console.log('BI:', boxIndex)
        const playerMove = Gameboard.cells(boxIndex, currentPlayer) //pass the second class of the object clicked as the index of the item in the gameboard array and set the value to the current player X or O
        console.log('Gameboard:', Gameboard.board)

        if (playerMove) {
  this.textContent = currentPlayer

      if (currentPlayer === 'X') {
        this.style.color = 'white';
        this.style.backgroundColor = 'rgb(163, 64, 64)'
        Gameboard.winner(currentPlayer)
        // checkWins(currentPlayer)
        currentPlayer = 'O'; //switch current player BEFORE auto-switching
        Gameboard.player(currentPlayer)
        }
        

        else if (currentPlayer === 'O') {
        this.style.color = 'white';
        this.style.backgroundColor = 'rgb(53, 116, 66'
        Gameboard.winner(currentPlayer)
        // checkWins(currentPlayer)
        currentPlayer = 'X';
        Gameboard.player(currentPlayer)
        }

        }
      
    }
})})

//gameboard array inside gameboard object

const Gameboard = {
    board: ['','','','','','','','',''],
    
    getBoard: function() {
        return this.board
    },

    cells: function(index, player) {
        if (this.board[index] === '') {
            this.board[index] = player
            return true
}
            return false
    },
    winner: function(player) {

        const wins = [
                [0,1,2], [3,4,5], [6,7,8],//columns
                [0,3,6], [1,4,7], [2,5,8], //rows
                [0,4,8], [6,4,2]//diagonals
            ]
        
        for (i = 0; i < wins.length; i++) {
    const check = wins[i]
    const a = this.board[check[0]]
    const b = this.board[check[1]]
    const c = this.board[check[2]]
       
    if (a === player && b === player && c === player) {
        console.log('winner:', player)
        const winnerText = document.createElement('div')
        winnerText.textContent = `${player} Wins!`
        document.body.appendChild(winnerText)
        Gameboard.board = ['','','','','','','','','']
        console.log('reset board:', Gameboard.board)
        setTimeout(() => Gameboard.reset(Gameboard.board, winnerText), 2000) //this will be immediately invoked without the function reference () => essentially saying i want a function to be performed 
        return true
        //create append to DOM function
    }


}},
    player: function(currentPlayer){
        if(currentPlayer === 'X') {
    playerO.style.color = 'black'
    playerO.style.backgroundColor = 'rgba(255, 255, 255, 0)'
    playerX.style.color = 'white'
    playerX.style.backgroundColor = 'rgb(163, 64, 64)'
    console.log(Gameboard)
}
else if(currentPlayer === 'O') {
    playerX.style.color = 'black'
    playerX.style.backgroundColor = 'rgba(255, 255, 255, 0)'
    playerO.style.color = 'white'
    playerO.style.backgroundColor = 'rgb(53, 116, 66)'
    console.log(Gameboard)

}
    },
    reset: function(board, winnerTextDiv) {
      this.board = ['','','','','','','','',''],
      console.log('game reset:', board)
      boxes.forEach((box) => {
        box.textContent = ''
        box.style.backgroundColor = ''
        box.style.color = ''
      })
      currentPlayer = 'none'
      setTimeout(() => {document.body.removeChild(winnerTextDiv)}, 2000) 
    },
}
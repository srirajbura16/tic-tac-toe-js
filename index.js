//Selectors
const container = document.querySelector('#cell-container')

//---------
const WINNINGS = [
  [0, 3, 6], [1, 4, 7], [2, 5, 8], //verticle
  [0, 1, 2], [3, 4, 5], [6, 7, 8], //horizontal
  [0, 4, 8], [2, 4, 6] //diagonal
]

const game = (function(){
  const playerX = Player('HBO', 'X')
  const playerO = Player('MMO', 'O')
  let currentPlayer = playerX
  let board = gameBoard.board

  const gameOver = () => {
    gameBoard.checkWinnings(currentPlayer.symbol) || 
    gameBoard.full()
  }

  return {}
})()

const Player = (name, symbol) => {

  const input = () => {
    console.log('nooooooo')
  }

  return {name, symbol, input }
}

const gameBoard = (function(){

  let board = ['X', 'O', 'X', 'O', 'X', 'X', 'X', 'O', 'O']

  const render = () => {
    board.forEach((ele, index) => {
      const cell = document.createElement('div')
      cell.classList.add('cell')
      cell.setAttribute('data-index', index)
      container.appendChild(cell)
      _addEventToCell(cell)
    })
  }

  const _addEventToCell = (cell) => {
    cell.addEventListener('click', () => {
      let index = cell.dataset.index
      console.log(index)
      return index
    })
  }

  const checkWinnings = (playerSymbol) => {
    WINNINGS.forEach(combo => {
      if (combo.every((index) => {
        board[index] === playerSymbol
      })){
        return true
      }
    })
    return false
  }

  const full = () => {
    return board.every(ele => ele !== '')
  }

  return {board, render, full}
})()

gameBoard.render()

console.log(container.childNodes)

// console.log(gameBoard.full(['3', '3']))

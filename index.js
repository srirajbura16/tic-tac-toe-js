//Selectors
const container = document.querySelector('#cell-container')
const playAgain = document.querySelector('.refresh')

//---------
const Player = (name, symbol) => {


  return {name, symbol}
}

const gameBoard = (function(){

  let board = ['', '', '', '', '', '', '', '', '']
  const WINNINGS = [
    [0, 3, 6], [1, 4, 7], [2, 5, 8], //verticle
    [0, 1, 2], [3, 4, 5], [6, 7, 8], //horizontal
    [0, 4, 8], [2, 4, 6] //diagonal
  ]

  const render = () => {
    container.innerHTML = ''
    board.forEach((ele, index) => {
      const cell = document.createElement('div')
      cell.classList.add('cell')
      cell.setAttribute('data-index', index)
      cell.textContent = ele
      container.appendChild(cell)
    })
  }

  const win = (player) => {
    WINNINGS.forEach(combo => {
      if (combo.every(index => board[index] === player.symbol)){
        alert(`${player.name}(${player.symbol}), WINS!!\n\nRefresh to play again!`)
        refresh()
        render()
        return true
      }
    })
    return false
  }

  const full = () => {
    if (board.every(ele => ele !== '')) {
      alert('TIE!\n\nRefresh to play again!')
      refresh()
      return true
    } 
  }

  const refresh = () => {
    playAgain.style.display = 'block'
    return playAgain.addEventListener('click',location.reload.bind(location))
  }

  return {board, render, win, full}
})()






const xName = prompt('Player X, enter your name:')
const oName = prompt('Player O, enter your name:')

const xPlayer = Player(xName, 'X')
const oPlayer = Player(oName, 'O')

const game = (function(xPlayer, oPlayer){
  const playerX = xPlayer
  const playerO = oPlayer
  let currentPlayer = playerO

  const play = () => {
    gameBoard.render()
    container.childNodes.forEach(cell => {
      cell.addEventListener('click', () => {
        const index = cell.dataset.index
          switchPlayers()
          if(validateInput(cell)){
            gameBoard.board[index] = currentPlayer.symbol
            gameBoard.render()
            game.play()
            console.log('exicuted')
          }
          gameOver()
      })
    })
  }

  const validateInput = (cell) => {
    if (cell.textContent === ''){
      return true
    }
    return false
  }

  const gameOver = () => {
    gameBoard.win(currentPlayer) || gameBoard.full()
  }

  const switchPlayers = () => {
    switch(currentPlayer){
      case playerX:
        currentPlayer = playerO
        break;
      case playerO:
        currentPlayer = playerX
        break
    }
  }

  return {play}
})(xPlayer, oPlayer)

game.play()

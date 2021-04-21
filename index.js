//Selectors
const container = document.querySelector('#cell-container')

//---------
const gameBoard = (function(){

  let board = ['X', 'O', 'X', 'O', 'X', 'X', 'X', 'O', 'O']

  const render = () => {
    board.forEach(ele => {
      const cell = document.createElement('div')
      cell.classList.add('cell')
      cell.textContent = ele
      container.appendChild(cell)
    })
  }

  return {board, render}
})()

gameBoard.render()
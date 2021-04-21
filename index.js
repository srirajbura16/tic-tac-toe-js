//Selectors
const container = document.querySelector('#cell-container')

//---------

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

  return {board, render}
})()

gameBoard.render()

console.log(container.childNodes)

console.log(gameBoard.full(['3', '3']))

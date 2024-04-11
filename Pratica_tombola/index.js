//funzione che crea il tabellone
const generateMainBoard = function () {
    const board = document.querySelector('.main-board')
    for (let i = 0; i < 90; i++) {
        board.innerHTML += `<div class = 'cell'>${i + 1}</div>`
    }
}

//inserire in un array
const fillArray = function () {
    const arr = []
    for (let i = 0; i < 90; i++) {
        arr.push(i + 1)
    }
    return arr
}

//genera numero random
const getRandomNum = function (range) {
    const randIndex = Math.floor(Math.random() * range.length)
    const random = range.splice(randIndex, 1) [0]
    return random
}

//stampare il numero
//associare la classe
const generateRandNumber = function (range) {
    const random = getRandomNum (range)
    const randNumDiv = document.getElementById ('randNum')
    randNumDiv.innerText = 'Numero: ' + random
   const cells = document.querySelectorAll ('.cell')
    cells[random - 1].classList.add('selected')

    const userCells = document.querySelectorAll ('.cell')
    userCells.forEach((cell) => {
        if (parseInt(cell.innerText) === random) {
            cell.classList.add('selected')
        }
    })
}

//genera e gestisce le tabelline

const generateUserBoards = function () {
}
  
window.onload = function () {
    generateMainBoard()
    const randBtn = document.getElementById('randBtn')
    const range = fillArray()
    randBtn.addEventListener('click', function () {
      generateRandNumber(range)
    })
    const userBoardBtn = document.getElementById('userBoardBtn')
    userBoardBtn.onclick = generateUserBoards
  }


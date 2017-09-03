const store = require('./store')
const events = require('./events')

let turn = 'X'
// let board = ['', '', '', '', '', '', '', '', '']
let board = events.onUpdateGame

const fill = function () {
  console.log(board)
  const id = $(this).attr('id')
  // const index = id
  if (board[id] !== '') {
    console.log('kindly choose another square')
  } else if (board[id] === '' && turn === 'X') {
    board[id] = 'X'
    $('#' + id).text('X')
    checkForWinner()
    turn = 'O'
    $('#turn-message').text('O`s Turn')
  } else {
    board[id] = 'O'
    $('#' + id).text('O')
    checkForWinner()
    turn = 'X'
    $('#turn-message').text('X`s Turn')
  }
}
const checkDraw = function () {
  if (board[0] !== '' && board[1] !== '' && board[2] !== '' &&
      board[3] !== '' && board[4] !== '' && board[5] !== '' &&
      board[6] !== '' && board[7] !== '' && board[8] !== '') {
    $('.box').off()
    $('#winner').text('DRAW')
    store.game.over = true
  }
}

const reset = function () {
  event.preventDefault()
  console.log('game reset!')
  $('.box').text('')
  turn = 'X'
  board = ['', '', '', '', '', '', '', '', '']
  $('.box').on('click', function () {
    $('.box').on('click', fill)
  })
  $('#turn-message').text('X`s Turn')
  $('#winner').text('')
}
const checkForWinner = function () {
  if (board[0] === 'X' && board[1] === 'X' && board[2] === 'X') {
    console.log('WINNER WINNER CHICKEN DINNER!')
    $('.box').off()
    $('#winner').text('X WINS')
    store.game.over = true
  } else if (board[3] === 'X' && board[4] === 'X' && board[5] === 'X') {
    console.log('WINNER WINNER CHICKEN DINNER!')
    $('.box').off()
    $('#winner').text('X WINS')
    store.game.over = true
  } else if (board[6] === 'X' && board[7] === 'X' && board[8] === 'X') {
    console.log('WINNER WINNER CHICKEN DINNER!')
    $('.box').off()
    $('#winner').text('X WINS')
    store.game.over = true
  } else if (board[0] === 'X' && board[3] === 'X' && board[6] === 'X') {
    console.log('WINNER WINNER CHICKEN DINNER!')
    $('.box').off()
    $('#winner').text('X WINS')
    store.game.over = true
  } else if (board[1] === 'X' && board[4] === 'X' && board[7] === 'X') {
    console.log('WINNER WINNER CHICKEN DINNER!')
    $('.box').off()
    $('#winner').text('X WINS')
    store.game.over = true
  } else if (board[2] === 'X' && board[5] === 'X' && board[8] === 'X') {
    console.log('WINNER WINNER CHICKEN DINNER!')
    $('.box').off()
    $('#winner').text('X WINS')
    store.game.over = true
  } else if (board[0] === 'X' && board[4] === 'X' && board[8] === 'X') {
    console.log('WINNER WINNER CHICKEN DINNER!')
    $('.box').off()
    $('#winner').text('X WINS')
    store.game.over = true
  } else if (board[2] === 'X' && board[4] === 'X' && board[6] === 'X') {
    console.log('WINNER WINNER CHICKEN DINNER!')
    $('.box').off()
    $('#winner').text('X WINS')
    store.game.over = true
  } else if (board[0] === 'O' && board[1] === 'O' && board[2] === 'O') {
    console.log('WINNER WINNER CHICKEN DINNER!')
    $('.box').off()
    $('#winner').text('O WINS')
    store.game.over = true
  } else if (board[3] === 'O' && board[4] === 'O' && board[5] === 'O') {
    console.log('WINNER WINNER CHICKEN DINNER!')
    $('.box').off()
    $('#winner').text('O WINS')
    store.game.over = true
  } else if (board[6] === 'O' && board[7] === 'O' && board[8] === 'O') {
    console.log('WINNER WINNER CHICKEN DINNER!')
    $('.box').off()
    $('#winner').text('O WINS')
    store.game.over = true
  } else if (board[0] === 'O' && board[3] === 'O' && board[6] === 'O') {
    console.log('WINNER WINNER CHICKEN DINNER!')
    $('.box').off()
    $('#winner').text('O WINS')
    store.game.over = true
  } else if (board[1] === 'O' && board[4] === 'O' && board[7] === 'O') {
    console.log('WINNER WINNER CHICKEN DINNER!')
    $('.box').off()
    $('#winner').text('O WINS')
    store.game.over = true
  } else if (board[2] === 'O' && board[5] === 'O' && board[8] === 'O') {
    console.log('WINNER WINNER CHICKEN DINNER!')
    $('.box').off()
    $('#winner').text('O WINS')
    store.game.over = true
  } else if (board[0] === 'O' && board[4] === 'O' && board[8] === 'O') {
    console.log('WINNER WINNER CHICKEN DINNER!')
    $('.box').off()
    $('#winner').text('O WINS')
    store.game.over = true
  } else if (board[2] === 'O' && board[4] === 'O' && board[6] === 'O') {
    console.log('WINNER WINNER CHICKEN DINNER!')
    $('.box').off()
    $('#winner').text('O WINS')
    store.game.over = true
  } else {
    checkDraw()
  }
}

// const winning = [
//   ['0', '1', '2'],
//   ['3', '4', '5'],
//   ['6', '7', '8'],
//   ['0', '3', '6'],
//   ['1', '4', '7'],
//   ['2', '5', '8'],
//   ['0', '4', '8'],
//   ['2', '4', '6']
// ]
module.exports = {
  board,
  fill,
  checkForWinner,
  reset
}

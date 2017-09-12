const store = require('./store')
// const events = require('./events')
//
// let data = {
//   game: {
//     cell: {
//       index: store.game.data.id,
//       value: store.game.data.turn
//     },
//     over: store.game.over
//   }
// }
store.turn = 'X'
let board = ['', '', '', '', '', '', '', '', '']

const fill = function (event) {
  board = store.game.cells
  const id = $(event.target).attr('id')
  console.log(event)
  // if (store.game.over === true) {
  //   return
  if (board[id] !== '') {
    $('#turn-message').text('Choose another square!')
  } else if (board[id] === '' && store.turn === 'X') {
    board[id] = 'X'
    $('#' + id).text('X')
    checkForWinner()
    store.turn = 'O'
    $('#turn-message').text('O`s Turn')
  } else {
    board[id] = 'O'
    $('#' + id).text('O')
    checkForWinner()
    store.turn = 'X'
    $('#turn-message').text('X`s Turn')
  }
  console.log(board)
}
const checkDraw = function () {
  if (board[0] !== '' && board[1] !== '' && board[2] !== '' &&
      board[3] !== '' && board[4] !== '' && board[5] !== '' &&
      board[6] !== '' && board[7] !== '' && board[8] !== '') {
    $('#winner').text('DRAW! Click `New Game` to play again!')
    $('#turn-message').hide()
    store.game.over = true
  }
}

const reset = function () {
  event.preventDefault()
  // console.log('game reset!')
  $('.box').text('')
  store.turn = 'X'
  board = ['', '', '', '', '', '', '', '', '']
  // board = store.game.cells
  // $('.box').on('click', function () {
  //   $('.box').on('click', fill)
  // })
  $('#turn-message').show()
  $('#turn-message').text('X`s Turn')
  $('#message').text('Click `New Game` to play again!')
  $('#winner').text('')
}
const signOutReset = function () {
  // console.log('game reset!')
  $('.box').text('')
  store.turn = 'X'
  board = ['', '', '', '', '', '', '', '', '']
  $('.box').on('click', function () {
    $('.box').on('click', fill)
  })
  $('#turn-message').text('X`s Turn')
  $('#winner').text('')
}
const checkForWinner = function () {
  if (board[0] === 'X' && board[1] === 'X' && board[2] === 'X') {
    // console.log('WINNER WINNER CHICKEN DINNER!')
    $('#winner').text('X WINS! Click `New Game` to play again!')
    $('#turn-message').hide()
    store.game.over = true
  } else if (board[3] === 'X' && board[4] === 'X' && board[5] === 'X') {
    // console.log('WINNER WINNER CHICKEN DINNER!')
    $('#winner').text('X WINS! Click `New Game` to play again!')
    $('#turn-message').hide()
    store.game.over = true
  } else if (board[6] === 'X' && board[7] === 'X' && board[8] === 'X') {
    // console.log('WINNER WINNER CHICKEN DINNER!')
    $('#winner').text('X WINS! Click `New Game` to play again!')
    $('#turn-message').hide()
    store.game.over = true
  } else if (board[0] === 'X' && board[3] === 'X' && board[6] === 'X') {
    // console.log('WINNER WINNER CHICKEN DINNER!')
    $('#winner').text('X WINS! Click `New Game` to play again!')
    $('#turn-message').hide()
    store.game.over = true
  } else if (board[1] === 'X' && board[4] === 'X' && board[7] === 'X') {
    // console.log('WINNER WINNER CHICKEN DINNER!')
    $('#winner').text('X WINS! Click `New Game` to play again!')
    $('#turn-message').hide()
    store.game.over = true
  } else if (board[2] === 'X' && board[5] === 'X' && board[8] === 'X') {
    // console.log('WINNER WINNER CHICKEN DINNER!')
    $('#winner').text('X WINS! Click `New Game` to play again!')
    $('#turn-message').hide()
    store.game.over = true
  } else if (board[0] === 'X' && board[4] === 'X' && board[8] === 'X') {
    // console.log('WINNER WINNER CHICKEN DINNER!')
    $('#winner').text('X WINS! Click `New Game` to play again!')
    $('#turn-message').hide()
    store.game.over = true
  } else if (board[2] === 'X' && board[4] === 'X' && board[6] === 'X') {
    // console.log('WINNER WINNER CHICKEN DINNER!')
    $('#winner').text('X WINS! Click `New Game` to play again!')
    $('#turn-message').hide()
    store.game.over = true
  } else if (board[0] === 'O' && board[1] === 'O' && board[2] === 'O') {
    // console.log('WINNER WINNER CHICKEN DINNER!')
    $('#winner').text('O WINS! Click `New Game` to play again!')
    $('#turn-message').hide()
    store.game.over = true
  } else if (board[3] === 'O' && board[4] === 'O' && board[5] === 'O') {
    // console.log('WINNER WINNER CHICKEN DINNER!')
    $('#winner').text('O WINS! Click `New Game` to play again!')
    $('#turn-message').hide()
    store.game.over = true
  } else if (board[6] === 'O' && board[7] === 'O' && board[8] === 'O') {
    // console.log('WINNER WINNER CHICKEN DINNER!')
    $('#winner').text('O WINS! Click `New Game` to play again!')
    $('#turn-message').hide()
    store.game.over = true
  } else if (board[0] === 'O' && board[3] === 'O' && board[6] === 'O') {
    // console.log('WINNER WINNER CHICKEN DINNER!')
    $('#winner').text('O WINS! Click `New Game` to play again!')
    $('#turn-message').hide()
    store.game.over = true
  } else if (board[1] === 'O' && board[4] === 'O' && board[7] === 'O') {
    // console.log('WINNER WINNER CHICKEN DINNER!')
    $('#winner').text('O WINS! Click `New Game` to play again!')
    $('#turn-message').hide()
    store.game.over = true
  } else if (board[2] === 'O' && board[5] === 'O' && board[8] === 'O') {
    // console.log('WINNER WINNER CHICKEN DINNER!')
    $('#winner').text('O WINS! Click `New Game` to play again!')
    $('#turn-message').hide()
    store.game.over = true
  } else if (board[0] === 'O' && board[4] === 'O' && board[8] === 'O') {
    // console.log('WINNER WINNER CHICKEN DINNER!')
    $('#winner').text('O WINS! Click `New Game` to play again!')
    $('#turn-message').hide()
    store.game.over = true
  } else if (board[2] === 'O' && board[4] === 'O' && board[6] === 'O') {
    // console.log('WINNER WINNER CHICKEN DINNER!')
    $('#winner').text('O WINS! Click `New Game` to play again!')
    $('#turn-message').hide()
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
  reset,
  signOutReset
}

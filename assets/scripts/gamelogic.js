let turn = 'X'

let board = ['', '', '', '', '', '', '', '', '']

const fill = function () {
  const id = $(this).attr('id')
  if (board[id] !== '') {
    console.log('kindly choose another square')
  } else if (board[id] === '' && turn === 'X') {
    board[id] = 'X'
    $('#' + id).text('X')
    checkForWinner()
    turn = 'O'
    $('#turn-message').text('O is up')
  } else {
    board[id] = 'O'
    $('#' + id).text('O')
    checkForWinner()
    turn = 'X'
    $('#turn-message').text('X is up')
  }
}

const reset = function () {
  event.preventDefault()
  let board = ['', '', '', '', '', '', '', '', '']
  let turn = 'X'
}
const checkForWinner = function () {
  if (board[0] === 'X' && board[1] === 'X' && board[2] === 'X') {
    console.log('WINNER WINNER CHICKEN DINNER!')
    $('.box').off()
  } else if (board[3] === 'X' && board[4] === 'X' && board[5] === 'X') {
    console.log('WINNER WINNER CHICKEN DINNER!')
    $('.box').off()
  } else if (board[6] === 'X' && board[7] === 'X' && board[8] === 'X') {
    console.log('WINNER WINNER CHICKEN DINNER!')
    $('.box').off()
  } else if (board[0] === 'X' && board[3] === 'X' && board[6] === 'X') {
    console.log('WINNER WINNER CHICKEN DINNER!')
    $('.box').off()
  } else if (board[1] === 'X' && board[4] === 'X' && board[7] === 'X') {
    console.log('WINNER WINNER CHICKEN DINNER!')
    $('.box').off()
  } else if (board[2] === 'X' && board[5] === 'X' && board[8] === 'X') {
    console.log('WINNER WINNER CHICKEN DINNER!')
    $('.box').off()
  } else if (board[0] === 'X' && board[4] === 'X' && board[8] === 'X') {
    console.log('WINNER WINNER CHICKEN DINNER!')
    $('.box').off()
  } else if (board[2] === 'X' && board[4] === 'X' && board[6] === 'X') {
    console.log('WINNER WINNER CHICKEN DINNER!')
    $('.box').off()
  } else if (board[0] === 'O' && board[1] === 'O' && board[2] === 'O') {
    console.log('WINNER WINNER CHICKEN DINNER!')
    $('.box').off()
  } else if (board[3] === 'O' && board[4] === 'O' && board[5] === 'O') {
    console.log('WINNER WINNER CHICKEN DINNER!')
    $('.box').off()
  } else if (board[6] === 'O' && board[7] === 'O' && board[8] === 'O') {
    console.log('WINNER WINNER CHICKEN DINNER!')
    $('.box').off()
  } else if (board[0] === 'O' && board[3] === 'O' && board[6] === 'O') {
    console.log('WINNER WINNER CHICKEN DINNER!')
    $('.box').off()
  } else if (board[1] === 'O' && board[4] === 'O' && board[7] === 'O') {
    console.log('WINNER WINNER CHICKEN DINNER!')
    $('.box').off()
  } else if (board[2] === 'O' && board[5] === 'O' && board[8] === 'O') {
    console.log('WINNER WINNER CHICKEN DINNER!')
    $('.box').off()
  } else if (board[0] === 'O' && board[4] === 'O' && board[8] === 'O') {
    console.log('WINNER WINNER CHICKEN DINNER!')
    $('.box').off()
  } else if (board[2] === 'O' && board[4] === 'O' && board[6] === 'O') {
    console.log('WINNER WINNER CHICKEN DINNER!')
    $('.box').off()
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

// $('#new-game').on('click', function () {
//   $('.grid').text('')
// })
const gameLogic = require('./gamelogic')
$(() => {
  $('.box').on('click', gameLogic.fill)
  // $('.box').on('click', gameLogic.changeTurn)
  $('#reset').on('click', gameLogic.reset)
})
module.exports = {

}

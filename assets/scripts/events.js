// $('#new-game').on('click', function () {
//   $('.grid').text('')
// })
const getFormFields = require(`../../lib/get-form-fields`)
const gameLogic = require('./gamelogic')
const api = require('./auth/api')
const ui = require('./auth/ui')
const store = require('./store')

// $(() => {
//   $('.box').on('click', gameLogic.fill)
//   $('#reset').on('click', gameLogic.reset)
// })

const onSignUp = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
  // console.log(data)
//   const user = data.credentials
//   if (user.email.length !== 0) {
//     if (user.password === user.password_confirmation) {
//
//     } else {
//       $('#message').text('Error on sign up, try a new password!')
//     }
//   } else {
//     $('#message').text('Error on sign up, try a new email!')
//   }
}
const onSignIn = function (event) {
  const data = getFormFields(this)
  // console.log(data)
  event.preventDefault()
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}
const onChangePassword = function (event) {
  const data = getFormFields(this)
  // console.log(data)
  event.preventDefault()
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}
const onSignOut = function (event) {
  event.preventDefault()
  gameLogic.reset()
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}
const onCreateGame = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  gameLogic.reset()
  // console.log(data)
  api.createGame(data)
    .then(ui.createGameSuccess)
    .catch(ui.createGameFail)
}

const onUpdateGame = function (event) {
  event.preventDefault()
  if (store.game.over === true) {
    return
  } else {
    gameLogic.fill(event)
    // const data = getFormFields(this)
    const data = {
      'game': {
        'cell': {
          'index': this.id,
          'value': $(this).html()
        },
        'over': store.game.over
      }
    }
    // console.log(data)
    api.updateGame(data)
      .then(ui.updateGameSuccess)
      .catch(ui.updateGameFail)
  }
}
const onGameHistory = function (event) {
  // console.log(event)
  event.preventDefault()
  api.gameHistory()
    .then(ui.gameHistorySuccess)
    .catch(ui.gameHistoryFail)
}
const addHandlers = function () {
  $('.grid').hide()
  $('.btn-group').hide()
  $('#turn-message').hide()
  $('#create-game').hide()
  // $('.box').on('click', gameLogic.fill)
  $('#reset').on('click', gameLogic.reset)
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#change-password').on('submit', onChangePassword)
  $('#sign-out').on('submit', onSignOut)
  $('#create-game').on('submit', onCreateGame)
  $('.box').on('click', onUpdateGame)
  $('#game-history').on('click', onGameHistory)
}

module.exports = {
  addHandlers
}

const store = require('../store')
// const gameLogic = require('../gamelogic')

const signUpSuccess = function (data) {
  // console.log(data)
  // console.log('Successfully signed up!')
  $('#message').text('Successfully signed up')
  $('#sign-up').trigger('reset')
  $('#sign-up').hide()
}
const signInSuccess = function (data) {
  // console.log(data)
  // console.log('Successfully signed in!')
  $('#message').text('You`re signed in! Click `New Game` in menu to play!')
  $('#sign-in').trigger('reset')
  store.user = data.user
  $('.grid').show()
  $('.btn-group').show()
  $('#create-game').show()
  $('#turn-message').show()
  $('#sign-up').hide()
  $('#sign-in').hide()
}
const changePasswordSuccess = function (data) {
  // console.log('Great success!')
  $('#change-password').trigger('reset')
  $('#message').text('You`ve successfully changed your password!')
}
const signOutSuccess = function () {
  // console.log('You`re signed out!')
  store.user = null
  // console.log(store.user)
  $('.grid').hide()
  $('.btn-group').hide()
  $('#create-game').hide()
  $('#message').text('You`ve successfully signed out!')
  $('#sign-up').show()
  $('#sign-in').show()
}
const createGameSuccess = function (data) {
  // console.log(data)
  // console.log('Game created!')
  $('#message').text('You created a new game!')
  store.game = data.game
}
const updateGameSuccess = function (data) {
  // console.log(data)
  // console.log('Game updated!')
  $('#message').text('You updated the game!')
  // store.game.id = data.game.id
}
const gameHistorySuccess = function (data) {
  store.games = data.games
  // console.log(store.games)
  // console.log('Game history')
  $('#message').text('You`ve played ' + store.games.length + ' games')
}
// //////////////////

const signUpFailure = function (data) {
  // console.error(error)
  $('#message').text('Email taken, choose a new one!')
}
const signInFailure = function (data) {
  // console.log(data)
  // console.log('failure!')
  $('#message').text('try again!')
}
const changePasswordFailure = function (data) {
  // console.log(data)
  // console.log('FAIL!')
  $('#message').text('Something went wrong, change password!')
}
const signOutFailure = function (data) {
  // console.log(error)
  // console.log('FAIL!')
  $('#message').text('You have not signed out!')
}
const createGameFail = function (data) {
  // console.log(data)
  // console.log('FAIL!')
  $('#message').text('Failure to create new game!')
}
const updateGameFail = function (data) {
  // console.log(data)
  // console.log('FAIL!')
  $('#message').text('Failure to update game!')
}
const gameHistoryFail = function (data) {
  // console.log(error)
  // console.log('Game history FAIL')
  $('#message').text('No history to get!')
}
module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure,
  createGameSuccess,
  createGameFail,
  updateGameSuccess,
  updateGameFail,
  gameHistorySuccess,
  gameHistoryFail
}

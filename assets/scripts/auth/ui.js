const store = require('../store')

const signUpSuccess = function (data) {
  console.log(data)
  console.log('Successfully signed up!')
  $('#message').text('Successfully signed up')
}
const signInSuccess = function (data) {
  console.log(data)
  console.log('Successfully signed in!')
  $('#message').text('You`re signed in!')
  store.user = data.user
}
const changePasswordSuccess = function (data) {
  console.log('Great success!')
  $('#message').text('You`ve successfully changed your password!')
}
const signOutSuccess = function () {
  console.log('You`re signed out!')
  $('#message').text('You`ve successfully signed out!')
  store.user = null
  console.log(store.user)
}
const createGameSuccess = function (data) {
  console.log(data)
  console.log('Game created!')
  $('#message').text('You created a new game!')
  store.game = data.game
}
const updateGameSuccess = function (data) {
  console.log(data)
  console.log('Game created!')
  $('#message').text('You updated the game!')
  store.game = data.game.id
}
// //////////////////

const signUpFailure = function (error) {
  console.error(error)
  $('#message').text('Email taken, choose a new one!')
}
const signInFailure = function (data) {
  console.log(data)
  console.log('failure!')
  $('#message').text('try again!')
}
const changePasswordFailure = function (data) {
  console.log(data)
  console.log('FAIL!')
  $('#message').text('Something went wrong, change password!')
}
const signOutFailure = function (error) {
  console.log(error)
  console.log('FAIL!')
  $('#message').text('You have not signed out!')
}
const createGameFail = function (data) {
  console.log(data)
  console.log('FAIL!')
  $('#message').text('Failure to create new game!')
}
const updateGameFail = function (data) {
  console.log(data)
  console.log('FAIL!')
  $('#message').text('Failure to update game!')
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
  updateGameFail
}
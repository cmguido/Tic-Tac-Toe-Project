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

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}

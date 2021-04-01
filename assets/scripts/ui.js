'use strict'
const store = require('./store')

const onSignUpSuccess = function () {
  $('#message').text("You're signed up!")
  $('#sign-up').trigger('reset')
}
const onError = function () {
  $('#message').text("That didn't work. Please try again")
}
const onSignInSuccess = function (response) {
  store.user = response.user
  $('#message').text(response.user.email + " signed in!")
  $('#sign-in').trigger('reset')
}
const onChangePasswordSuccess = function () {
  $('#message').text("Your password has been changed")
  $('#change-password').trigger('reset')
}


module.exports = {
  onSignUpSuccess,
  onError,
  onSignInSuccess,
  onChangePasswordSuccess
}

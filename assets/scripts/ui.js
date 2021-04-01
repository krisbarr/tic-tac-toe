'use strict'

const onSignUpSuccess = function () {
  $('#message').text("You're signed up!")
  $('#sign-up').trigger('reset')
}
const onError = function () {
  $('#message').text("That didn't work. Please try again")
}
const onSignInSuccess = function () {
  $('#message').text("You're signed in!")
  $('#sign-up').trigger('reset')
}


module.exports = {
  onSignUpSuccess,
  onError,
  onSignInSuccess
}

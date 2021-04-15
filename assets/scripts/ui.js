'use strict'
const store = require('./store')
const events = require('./events.js')

const onSignUpSuccess = function () {
  $('#message').text("You're signed up!")
  $('#sign-up').trigger('reset')
}
const onError = function () {
  $('#message').text("That didn't work. Please try again")
  $('#sign-up').trigger('reset')
  $('#sign-in').trigger('reset')
  $('#change-password').trigger('reset')
  $('#sign-out').trigger('reset')
}
const onSignInSuccess = function (response) {
  store.user = response.user
  $('#message').text(response.user.email + " signed in!")
  $('#sign-in').hide()
  $('#sign-up').hide()
  $('#change-password').show()
  $('#sign-out').show()
  $('#new-game').show()
  $('#sign-in').trigger('reset')
}
const onChangePasswordSuccess = function () {
  $('#message').text("Your password has been changed")
  $('#change-password').trigger('reset')
}
const onSignOutSuccess = function () {
  $('#message').text("You're signed out!")
  $('#sign-out').hide()
  $('#change-password').hide()
  $('#sign-in').show()
  $('#sign-up').show()
  $('.board').hide()
  $('#new-game').hide()
}


const onNewGameSuccess = function (response) {
  store.game = response.game
  store.currentPlayer = 'X'
  $('#message').text("Let's Play!")
  $('.board').show()
  $('#change-password').hide()
  $('.box').empty()
  $('.box').css('background', "url('public/gray-dirt.jpg')")

}

const onDoubleClick = function () {
  $('#message').text("You've already clicked here!")
}

const switchPlayer = function () {
  if (store.currentPlayer === 'X') {
    store.currentPlayer = 'O'
  } else {
    store.currentPlayer = 'X'
  }
}

const onWin = function (response) {
  store.game = response.game
  console.log(response.game.cells.length)
  if (response.game.over){
  $('#message').text(store.currentPlayer + ' is the winner!')
  } else {
    switchPlayer()
  $('#message').text("It is " + store.currentPlayer + "'s move")
}
}


const onTie = function (response) {
  store.game = response.game
  response.game.over = true
  $('#message').text("It's a tie")
}


module.exports = {
  onSignUpSuccess,
  onError,
  onSignInSuccess,
  onChangePasswordSuccess,
  onSignOutSuccess,
  onNewGameSuccess,
  onDoubleClick,
  onWin,
  onTie

}

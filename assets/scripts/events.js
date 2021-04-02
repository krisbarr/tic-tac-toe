'use strict'

const api = require('./api')
const ui = require('./ui')
const formFields = require('../../lib/get-form-fields')
//const gameLogic = require('./game-logic')

const onSignUp = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = formFields(form)
  api.create(formData)
    .then(ui.onSignUpSuccess)
    .catch(ui.onError)
}
const onSignIn = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = formFields(form)
  api.signIn(formData)
    .then(ui.onSignInSuccess)
    .catch(ui.onError)
}
const onChangePassword = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = formFields(form)
  api.changePassword(formData)
    .then(ui.onChangePasswordSuccess)
    .catch(ui.onError)
}
const onSignOut = function () {
  event.preventDefault()
  api.signOut()
    .then(ui.onSignOutSuccess)
    .catch(ui.onError)
}
const onNewGame = function () {
  event.preventDefault()
  api.newGame()
    .then(ui.onNewGameSuccess)
    .catch(ui.onError)
}
const onTurn = function () {
  const cell= event.target.id
  $('#' + cell).text('X')
  }

console.log($('div').data("cell-index"))





module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
  onNewGame,
  onTurn

}

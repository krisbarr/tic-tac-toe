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
const onTurn = function (event) {
  const cell= event.target.id
  if ($(event.target).text() === '') {
    $(event.target).text('X')
    } else {
    $('#message').text("You've already clicked here!")
    }
  }




//$('#' + cell).html('x')
  /*var cells = document.getElementsByClassName('col-4');
  for (var i = 0; i < cells.length; i++) {
    cells[i].onclick = function(target) {
      [].forEach.call(cells, function(cell) {

      });
      this.innerHTML = "";*/




//$('.col-4').html('X')

  //const turn = document.getElementById('message')

  /*cell.removeEventListener('click', this.handleClick, true);
  $('#message').text("YES YOU ARE AMAZING")*/



console.log($('div').data("cell-index"))





module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
  onNewGame,
  onTurn

}

'use strict'

const api = require('./api')
const ui = require('./ui')
const formFields = require('../../lib/get-form-fields')
const store = require('./store')
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
  api.newGame()
    .then(ui.onNewGameSuccess)
    .catch(ui.onError)
}

let currentMove = 'X'


const onTurn = function () {
  if (checkWin()) return
  const index = $(event.target).data('cell-index')
  const box = $(event.target)
  if (box.text() === ''){
    box.css('background', 'transparent')
    box.text(currentMove)
    store.game.cells[index] = currentMove
    currentMove = currentMove === 'X' ? 'O' : 'X'
    } else {
    ui.onDoubleClick()
    }

    const value = $(event.target).text()
        api.onTurnSuccess(index, value, checkWin())
              .then(ui.onWin)
              .catch(ui.onError)
        }


const checkWin = function () {
  if ((store.game.cells[0] === store.game.cells[1] && store.game.cells[0] === store.game.cells[2] && store.game.cells[0] !== '') ||
     (store.game.cells[3] === store.game.cells[4] && store.game.cells[3] === store.game.cells[5] && store.game.cells[3] !== '') ||
     (store.game.cells[6] === store.game.cells[7] && store.game.cells[6] === store.game.cells[8] && store.game.cells[6] !== '') ||
     //winning conditions for vertical columns
     (store.game.cells[0] === store.game.cells[3] && store.game.cells[0] === store.game.cells[6] && store.game.cells[0] !== '') ||
     (store.game.cells[1] === store.game.cells[4] && store.game.cells[1] === store.game.cells[7] && store.game.cells[1] !== '') ||
     (store.game.cells[2] === store.game.cells[5] && store.game.cells[2] === store.game.cells[8] && store.game.cells[2] !== '') ||
     //winning conditions for diagonals
     (store.game.cells[0] === store.game.cells[4] && store.game.cells[0] === store.game.cells[8] && store.game.cells[0] !== '') ||
     (store.game.cells[2] === store.game.cells[4] && store.game.cells[2] === store.game.cells[6] && store.game.cells[2] !== '')){
      return true
      } else if (store.game.cells[0] && store.game.cells[1] && store.game.cells[2] && store.game.cells[3] && store.game.cells[4]
                && store.game.cells[5]&& store.game.cells[6]&& store.game.cells[7] && store.game.cells[8] ) {
                  ui.onTie()
                } else {
                  return false
        }
}



module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
  onNewGame,
  onTurn,
  checkWin

}

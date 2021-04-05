'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const events = require('./events.js')
$(() => {
  $('#change-password').hide()
  $('#sign-out').hide()
  $('#new-game').hide()
  $('.board').hide()
  $('#sign-up').on('submit', events.onSignUp)
  $('#sign-in').on('submit', events.onSignIn)
  $('#change-password').on('submit', events.onChangePassword)
  $('#sign-out').on('click', events.onSignOut)
  $('#new-game').on('click', events.onNewGame)
  $('#cell-0').on('click', events.onTurn)
  $('#cell-1').on('click', events.onTurn)
  $('#cell-2').on('click', events.onTurn)
  $('#cell-3').on('click', events.onTurn)
  $('#cell-4').on('click', events.onTurn)
  $('#cell-5').on('click', events.onTurn)
  $('#cell-6').on('click', events.onTurn)
  $('#cell-7').on('click', events.onTurn)
  $('#cell-8').on('click', events.onTurn)
})

'use strict'

const api = require('./api')
const ui = require('./ui')
const formFields = require('../../lib/get-form-fields')

const onSignUp = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = formFields(form)
  api.create(formData)
    .then(ui.onSignUpSuccess)
    .catch(ui.onError)


}

module.exports = {
  onSignUp
}

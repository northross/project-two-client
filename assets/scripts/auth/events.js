'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const store = require('../store')
const api = require('./api.js')
const ui = require('./ui.js')

// User Button Functions

const onSignUp = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log('success?')
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()
  // $('.rules').show(()=>{$('.rules').css('display', 'rules')})
  const data = getFormFields(event.target)
  console.log(store.user)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onSignOut = function (event) {
  event.preventDefault()
  // $('.grid').hide()
  console.log('success?')
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log('success?')
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

// Vocab Button Functions

const onCreateWord = function (event) {
  event.preventDefault()
  const vocabData = getFormFields(event.target)
  console.log('onCreateWord function')
  api.createWord(vocabData)
    .then(ui.createWordSuccess)
    .catch(ui.createWordFailure)
}

const onShowAll = function (event) {
  event.preventDefault()
  console.log('onShowAll function')
  api.showAll()
    .then(ui.showAllSuccess)
    .catch(ui.showAllFailure)
}

const onShowOne = function (event) {
  event.preventDefault()
  console.log('onShowOne function')
  api.showOne()
    .then(ui.showOneSuccess)
    .catch(ui.showOneFailure)
}

const onUpdateWord = function (event) {
  event.preventDefault()
  console.log('Updateword function')
  const data = getFormFields(event.target)
  api.UpdateWord()
    .then(ui.updateWordSuccess)
    .catch(ui.UpdateWordFailure)
}

const addHandlers = () => {
  $('#show-all').on('click', onShowAll)
}

module.exports = {
  onChangePassword,
  onSignOut,
  onSignIn,
  onSignUp,
  onCreateWord,
  onShowAll,
  onShowOne,
  onUpdateWord,
  addHandlers
}

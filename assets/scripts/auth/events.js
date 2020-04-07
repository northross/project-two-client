'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const store = require('../store')
const api = require('./api.js')
const ui = require('./ui.js')
const showAllTemplate = require('../templates/show-all.handlebars')
const showOneTemplate = require('../templates/show-one.handlebars')

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

// This opens my onCreateWord form
const onNewWord = function (event) {
  event.preventDefault()
  $('#create-word').show()
  $('.directions').hide()
  $('#content').hide()
  $('#note').text("Let's build a new word!")
}

// This allows the for submitting create word form
const onCreateWord = function (event) {
  event.preventDefault()
  const vocabData = getFormFields(event.target)
  console.log('onCreateWord function')
  api.createWord(vocabData)
    .then(ui.createWordSuccess)
    .catch(ui.createWordFailure)
}

// function for getting my single word - triggered by showOne

const onShowAll = function (event) {
  event.preventDefault()
  console.log('onShowAll function')
  api.showAll()
    .then(ui.showAllSuccess)
    .catch(ui.showAllFailure)
}

const onShowOne = function (event) {
  const id = $(event.target).data('id')
  api.showOne(id)
      .then((data)=>{
        console.log('data:', data)
        ui.getWordSuccess(data)
      })
      .catch(ui.getWordFailure)
  }

const onDeleteWord = function (event) {
  const id = $(event.target).data('id')
  api.deleteWord(id)
  .then(function () {
    onShowAll(event)
  })
  .catch(ui.deleteWordfailure)
}

const addHandlers = () => {
  $('#show-all').on('click', onShowAll)
  $('.content').on('click', '.information-btn', onShowOne)
  $('#content').on('click', '.delete-btn', onDeleteWord)
}

module.exports = {
  onChangePassword,
  onSignOut,
  onSignIn,
  onSignUp,
  onCreateWord,
  onShowAll,
  onShowOne,
  onNewWord,
  onDeleteWord,
  addHandlers
}

// const onShowOne = function (event) {
//   const id = $(event.target).data('id')
//   api.showOne(id)
//       .then((data)=>{
//         console.log('data:', data)
//         ui.getWordSuccess(data)
//       })
//       .catch(ui.getWordFailure)
//   }

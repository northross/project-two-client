'use strict'

const store = require('../store')
const events = require('./events')
const showAllTemplate = require('../templates/show-all.handlebars')
// User Button Function UI's
// Success function
// followed by
// Failure Function

const signUpSuccess = function (data) {
  $('#note').show()
  $('#note').text('Welcome to a Very Exclusive Club for Learners!')
  $('#note').text("Please 'Sign-In' to Play!")
  console.log('SU works')
  $('form input[type="text"]').val('')
  $('form input[type="password"]').val('')
}

const signUpFailure = function (error) {
  $('#note').text('Sign-Up was Unsuccessful')
  console.log('SU is broken')
  // $('form input[type="text"]').val('')
  // $('form input[type="password"]').val('')
}

const signInSuccess = function (data) {
  $('#note').show()
  $('#note').text("Welcome! Let's Build Some Vocabulary Word Tables!")

  $('#change-password').show()
  $('#create-word').show()
  $('#sign-out').show()
  $('#sign-in').hide()
  $('#sign-up').hide()
  $('#show-all').show()
  console.log('SI works')
  console.log(store.user)
  store.user = data.user
  $('form input[type="text"]').val('')
  $('form input[type="password"]').val('')
}

const signInFailure = function (error) {
  $('#note').text("!")
  $('#note').removeClass()
  $('#note').addClass('Sign-In: Unsuccessful!')
  console.log('SI is broken')
  $('form input[type="text"]').val('')
  $('form input[type="password"]').val('')
}

const changePasswordSuccess = function (data) {
  $('#note').text('Password Change was Successful!')
  console.log('CP works')
  $('form input[type="text"]').val('')
  $('form input[type="password"]').val('')
}

const changePasswordFailure = function (error) {
  $('#note').text('Password Change was Unsuccessful!')
  console.log('CP is broken')
  $('form input[type="text"]').val('')
  $('form input[type="password"]').val('')
}


const signOutSuccess = function (data) {
  $('#note').text('Thank you for learning today!')
  $('#change-password').hide()
  console.log('SO works')
  // $('.grid').hide()
  $('#sign-in').show()
  $('#sign-up').show()

  $('#sign-out').hide()
  $('#change-password').hide()
  $('#create-word').hide()
}

const signOutFailure = function (error) {
  $('#note').text('Woops, there was an error signing-out!')
  console.log('SO is broken')
}

// Vocab Button Function UI
  // Success function
  // followed by
  // Failure Function

const createWordSuccess = function (responseFromApi) {
  $('#note').text('You have created a new word!')
  $('#note').removeClass()
  $('#note').addClass('A new word has been created!')
  // store.user = data.user.vocab
  console.log(responseFromApi)
  // get rid of example box
}

const createWordFailure = function () {
  $('#note').text('You have created a new word!')
  console.log('Create word success')
  // get rid of example box
}

const showAllSuccess = function (responseFromApi) {
  $('#note').text('Here are all of your vocabulary words!')
  // $('#show-all').hide()
  console.log(responseFromApi)
  const showAllHtml = showAllTemplate({ vocabs: responseFromApi.books })
  $('.content').html(showAllHtml)
}

const showAllFailure = function () {
  $('#note').text('There was an error upon displaying your vocabulary words!')
  console.log('Show All words failure')
}

const showOneSuccess = function (responseFromApi) {
  ('#note').text('Showing all of you vocabulary words!')
  console.log(responseFromApi)
}

const showOneFailure = function () {
  $('#note').text('There was an error upon displaying your vocabulary word!')
  console.log('Show One word failure')
}

const updateWordSuccess = function () {
  $('#note').text('Your word has been updated')
  console.log('update word failure')
}

const updateWordFailure = function () {
  $('#note').text('Your word has not been updated')
  console.log('Update word failure')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  changePasswordSuccess,
  changePasswordFailure,
  createWordSuccess,
  createWordFailure,
  showAllSuccess,
  showAllFailure,
  updateWordSuccess,
  updateWordFailure
}

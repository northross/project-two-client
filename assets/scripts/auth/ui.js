'use strict'

const store = require('../store')
const events = require('./events')
const showAllTemplate = require('../templates/show-all.handlebars')
const showOneTemplate = require('../templates/show-one.handlebars')


// User Button Function UI's
// Success function
// followed by
// Failure Function

const signUpSuccess = function(data) {
  $('#note').show()
  $('#note').text('Welcome to a Very Exclusive Club for Learners!')
  $('form input[type="text"]').val('')
  $('form input[type="password"]').val('')

}

const signUpFailure = function(error) {
  $('#note').text('Sign-Up was Unsuccessful')
  $('form input[type="text"]').val('')
  $('form input[type="password"]').val('')
}

const signInSuccess = function(data) {
  // if ()
  $('#note').show()
  $('#note').text("Welcome! Let's Build Some Vocabulary Word Tables!")

  $('#change-password').show()
  $('#new-word').show()
  $('#signs').hide()
  $('#sign-out').show()
  $('#sign-in').hide()
  $('#sign-up').hide()
  $('#show-all').show()
  store.user = data.user
  $('form input[type="email"]').val('')
  $('form input[type="password"]').val('')
}

const signInFailure = function(error) {
  $('#note').text("Invalid email and/or password. Please be sure that you have signed-up first and try again!")
  $('#note').removeClass()
  $('#note').addClass('Sign-In: Unsuccessful!')
  $('form input[type="text"]').val('')
  $('form input[type="password"]').val('')
}

const changePasswordSuccess = function(data) {
  $('#note').text('You changed your password!')
  $('form input[type="text"]').val('')
  $('form input[type="password"]').val('')
}

const changePasswordFailure = function(error) {
  $('#note').text('Password Change was Unsuccessful!')
  $('form input[type="text"]').val('')
  $('form input[type="password"]').val('')
}


const signOutSuccess = function(data) {
  // messages / directions
  $('#note').text('Thank you for learning today! Come back soon!')
  $('.directions').show()
  // user elements
  $('#change-password').hide()
  $('#sign-in').show()
  $('#sign-up').show()
  $('#signs').show()
  $('#sign-out').hide()
  //  word elements
  $('.content').hide()
  $('#show-all').hide()
  $('#create-word').hide()
  $('#new-word').hide()
}

const signOutFailure = function(error) {
  $('#note').text('Woops, there was an error signing-out!')
}

// Vocab Button Function UI
// Success function
// followed by
// Failure Function

const createWordSuccess = function(responseFromApi) {
  $('#note').text('You have created a new word!')
  $('form input[type="text"]').val('')
  $('#create-word').hide()
}

const createWordFailure = function() {
  $('#note').text('Please enter all fields and try again!')
  $('form input[type="text"]').val('')
  // get rid of example box
}

const showAllSuccess = function(data) {
  if (data.vocabs.length === 0) {
    $('#content').hide()
    $('#create-word').hide()
    return $('#note').text('You do not have any words. Click "Creat Word" to get started!')
  } else {
    $('#note').text('Here are all of your vocabulary words!')
    $('.directions').hide()
    // $('#show-all').hide()
    $('#create-word').hide()
    $('.update-word-div').hide()
    $('#content').show()
    const showAllHtml = showAllTemplate({
      vocabs: data.vocabs
    })
    $('.content').html(showAllHtml)
  }
}

const showAllFailure = function() {
  $('#note').text('There was an error upon displaying your vocabulary words!')
}

const getWordSuccess = function(info) {
  const showOneHtml = showOneTemplate({
    vocabs: info.vocab
  })
  $('#note').text("Here is more information about your word...")
  $('.content').html(showOneHtml)
}

const getWordFailure = function() {
  $('#note').text('Woops... There was an error with retreiving your word')
}

const onSetUpdateSuccess = function(data) {
  store.id = data.vocab.id
  $('#note').text("Let's change your word's information!")
  $('.content').hide()
  $('.update-word-div').show()
  $('#word').val(data.vocab.word)
  $('#definition').val(data.vocab.definition)
  $('#sounds_like').val(data.vocab.sounds_like)
  $('#synonyms').val(data.vocab.synonyms)
  $('#antonyms').val(data.vocab.antonyms)
  $('#sentence').val(data.vocab.sentence)
}

const onSetUpdateFailure = function(error) {
  $('#note').text('There was an issue setting this update. In the meantime, you can create a new word and delete the current version')
  $('.update-word-div').hide()
  $('.directions').show()
}

const onUpdateSubmitSuccess = function() {
  $('#note').text('You have updated your word! Click "View All Words" to see!')
  $('form input[type="text"]').val('')
  $('.update-word-div').hide()
  $('.directions').show()
}

const onUpdateSubmitFailure = function(error) {
  $('#note').text('There was an issue setting this update. In the meantime, you can create a new word and delete the current version')
  $('form input[type="text"]').val('')
  $('.update-word-div').hide()
  $('.directions').show()
}

// const showOneFailure = function () {
//   $('#note').text('There was an error upon displaying your vocabulary word!')
//   console.log('Show One word failure')
// }


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
  onUpdateSubmitFailure,
  onUpdateSubmitSuccess,
  getWordFailure,
  getWordSuccess,
  onSetUpdateSuccess,
  onSetUpdateFailure
}

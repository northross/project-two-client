'use strict'

const store = require('../store')
const events = require('./events')
const showAllTemplate = require('../templates/show-all.handlebars')
const showOneTemplate = require('../templates/show-one.handlebars')

// User Button Function UI's
// Success function
// followed by
// Failure Function

const signUpSuccess = function (data) {
  $('#note').show()
  $('#note').text('Welcome to a Very Exclusive Club for Learners!')
  console.log('SU works')
  $('form input[type="text"]').val('')
  $('form input[type="password"]').val('')

}

const signUpFailure = function (error) {
  $('#note').text('Sign-Up was Unsuccessful')
  console.log('SU is broken')
  $('form input[type="text"]').val('')
  $('form input[type="password"]').val('')
}

const signInSuccess = function (data) {
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
  console.log('SI works')
  console.log(store.user)
  store.user = data.user
  $('form input[type="text"]').val('')
  $('form input[type="password"]').val('')
}

const signInFailure = function (error) {
  $('#note').text("Invalid email and/or password. Please be sure that you have signed-up first and try again!")
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
  $('#note').text('Thank you for learning today! Come back soon!')
  $('#change-password').hide()
  console.log('SO works')
  // $('.grid').hide()
  $('#sign-in').show()
  $('#sign-up').show()
  $('#sign-out').hide()
  $('.directions').show()
  $('.content').hide()
  $('#show-all').hide()
  $('#create-word').hide()
  $('#new-word').hide()
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
  console.log(responseFromApi)
  $('form input[type="text"]').val('')
  $('#create-word').hide()
  // get rid of example box
}

const createWordFailure = function () {
  $('#note').text('Please enter all fields and try again!')
  console.log('Create word success')
  $('form input[type="text"]').val('')
  // get rid of example box
}

const showAllSuccess = function (data) {
  if (data.vocabs.length === 0) {
    return  $('#note').text('You have not made any words. Click "Creat Word" to get started!')
  } else {
    console.log(data.vocabs.length)
    // console.log(data.vocabs(id))
    $('#note').text('Here are all of your vocabulary words!')
    $('.directions').hide()
    // $('#show-all').hide()
    $('#create-word').hide()
    $('#content').show()
    const showAllHtml = showAllTemplate({ vocabs: data.vocabs })
    $('.content').html(showAllHtml)
  }
}

const showAllFailure = function () {
  $('#note').text('There was an error upon displaying your vocabulary words!')
  console.log('Show All words failure')
}

// const showOneSuccess = function () {
//   ('#note').text('Here is your word!')
//   console.log(responseFromApi)
//   $('.content').hide()
//   const showOnehtml = showOneTemplate({ vocabs: data.vocabs })
//   $('.content').html(showOneHtml)
// }

const getWordSuccess = function (info) {
  console.log("info:", info.vocab)
  const showOneHtml = showOneTemplate({ vocabs: info.vocab })
  console.log(showOneTemplate)
  $('.content').html(showOneHtml)
}

const getWordFailure = function () {
  console.log("this didn't work")
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
  // showOneSuccess,
  // showOneFailure,
  getWordFailure,
  getWordSuccess
}

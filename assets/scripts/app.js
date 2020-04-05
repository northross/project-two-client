'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./auth/events.js')
const vocabEvents = require('./auth/events.js')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // user events
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('submit', authEvents.onSignOut)

  // user buttons display
  $('#sign-up').show()
  $('#sign-in').show()
  $('#change-password').hide()
  $('#sign-out').hide()

  // vocab events
  vocabEvents.addHandlers()
  $('#create-word').on('submit', authEvents.onCreateWord)
  $('#show-all').on('submit', authEvents.onShowAll)
  $('#show-one').on('submit', authEvents.onShowOne)
  $('#update-word').on('submit', authEvents.onUpdateWord)

  // vocab buttons display
  $('#create-word').hide()
  $('#show-all').hide()
  $('#show-one').hide()
  $('#update-word').hide()
})

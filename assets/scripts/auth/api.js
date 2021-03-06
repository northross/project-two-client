'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const config = require('../config')
const store = require('../store')
const ui = require('./ui.js')


const signUp = function(credentials) {
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data: credentials
  })
}

const signIn = function(data) {
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data: data
  })
}

const changePassword = function(data) {
  return $.ajax({
    url: config.apiUrl + '/change-password',
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}

const signOut = function() {
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const createWord = function(vocabData) {
  return $.ajax({
    url: config.apiUrl + '/vocabs',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: vocabData
  })
}

const showAll = function() {
  return $.ajax({
    url: config.apiUrl + '/vocabs',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
  })
}

const showOne = function(id) {
  return $.ajax({
    url: config.apiUrl + '/vocabs/' + id,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}


const deleteWord = function(id) {
  return $.ajax({
    url: config.apiUrl + '/vocabs/' + id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: id
  })
}

const updateWord = function(updateData) {
  return $.ajax({
    url: config.apiUrl + '/vocabs/' + store.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: updateData
  })
}

module.exports = {
  signUp,
  signIn,
  signOut,
  changePassword,
  createWord,
  showAll,
  updateWord,
  showOne,
  deleteWord
}

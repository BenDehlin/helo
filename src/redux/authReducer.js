import axios from 'axios'
import actionTypes from './actionTypes'
const initialState = {
  user: {id: '', username: '', img: ''},
  loading: false,
  errorMessage: ''
}
const {LOGIN, REGISTER, LOGOUT, GET_USER, AUTHENTICATION, PENDING, FULFILLED, REJECTED} = actionTypes

export function register(username, password){
  const user = axios.post('/auth/register', {username, password}).then(results => {
    return results.data
  }).catch(err => console.log(err))
  return {
    type: REGISTER,
    payload: user
  }
}

export function login(username, password){
  const user = axios.post('/auth/login', {username, password}).then(results => {
    return results.data
  }).catch(err => console.log(err))
  return {
    type: LOGIN,
    payload: user
  }
}

export function logout(){
  axios.post('/auth/logout').then(() => {
    return
  }).catch(err => console.log(err))
  return {
    type: LOGOUT,
    payload: {id: '', username: '', img: ''}
  }
}

export function getUser(){
  const user = axios.get('/auth/user').then(results => {
    return results.data
  }).catch(err => console.log(err))
  return {
    type: GET_USER,
    payload: user
  }
}

export default function authReducer(state = initialState, action){
  const {type, payload} = action
  switch(type){
    case REGISTER + PENDING:
      return {...state, loading: true}
    case REGISTER + FULFILLED:
      return {...state, user: payload, loading: false}
    case REGISTER + REJECTED:
      return {...state, errorMessage: payload, loading: false}
    case LOGIN + PENDING:
      return {...state, loading: true}
    case LOGIN + FULFILLED:
      return {...state, user: payload, loading: false}
    case LOGIN + REJECTED:
      return {...state, errorMessage: payload, loading: false}
    case LOGOUT + PENDING:
      return {...state, loading: true}
    case LOGOUT + FULFILLED:
      return {...state, user: payload, loading: false}
    case LOGOUT + REJECTED:
      return {...state, errorMessage: payload, loading: false}
    case GET_USER + PENDING:
      return {...state, loading: true}
    case GET_USER + FULFILLED:
      return {...state, user: payload, loading: false}
    case GET_USER + REJECTED:
      return {...state, errorMessage: payload, loading: false}
    default:
      return state
  }
}
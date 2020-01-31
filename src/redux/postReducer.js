import axios from 'axios'
import actionTypes from './actionTypes'
const initialState = {
  posts: [],
  post: {id: '', author: '', author_img: '', title: '', img: '', content: '', author_id: ''},
  loading: false,
  errorMessage: ''
}

const {GET_POSTS, GET_POST, POST_POST, PUT_POST, DELETE_POST, PENDING, FULFILLED, REJECTED} = actionTypes

export function getPosts(search='', myPost=true, id=''){
  console.log({search})
  const posts = axios.get(`/api/posts/${id}?search=${search}&mypost=${myPost}`).then(results => {
    return results.data
  }).catch(err => console.log(err))
  return {
    type: GET_POSTS,
    payload: posts
  }
}

export function getPost(id){
  const post = axios.get(`/api/post/${id}`).then(results => {
    return results.data
  }).catch(err => console.log(err))
  return {
    type: GET_POSTS,
    payload: post
  }
}

export function postPost(body){
  const posts = axios.post(`/api/posts/`, body).then(results => {
    return results.data
  }).catch(err => console.log(err))
  return {
    type: GET_POSTS,
    payload: posts
  }
}
export function putPost(body){
  const posts = axios.put(`/api/posts/${body.id}`, body).then(results => {
    return results.data
  }).catch(err => console.log(err))
  return {
    type: GET_POSTS,
    payload: posts
  }
}
export function deletePost(id){
  const posts = axios.delete(`/api/posts/${id}`).then(results => {
    return results.data
  }).catch(err => console.log(err))
  return {
    type: GET_POSTS,
    payload: posts
  }
}

export default function postReducer(state = initialState, action){
  const {type, payload} = action
  switch(type){
    case GET_POSTS + FULFILLED:
      return {...state, posts: payload}
    case GET_POSTS + REJECTED:
      return {...state, errorMessage: payload}
    case GET_POST + FULFILLED:
      return {...state, post: payload}
    case GET_POST + REJECTED:
      return {...state, errorMessage: payload}
    case POST_POST + FULFILLED:
      return {...state, posts: payload}
    case POST_POST + REJECTED:
      return {...state, errorMessage: payload}
    case PUT_POST + FULFILLED:
      return {...state, posts: payload}
    case PUT_POST + REJECTED:
      return {...state, errorMessage: payload}
    case DELETE_POST + FULFILLED:
      return {...state, posts: payload}
    case DELETE_POST + REJECTED:
      return {...state, errorMessage: payload}
    default:
      return state
  }
}
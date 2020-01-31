import React from 'react'
import {connect} from 'react-redux'
import {deletePost} from '../redux/postReducer'
import {getPost} from '../redux/postReducer'
import ProfileImage from './ProfileImage'
import {withRouter} from 'react-router-dom'

function Post(props){
  const {id, title, img, content, author, author_img} = props.post
  const {push} = props.history
  return (
    <div className='post'
    onClick = {() => {
      getPost(id)
      push(`/post/${id}`)
    }}
    >
      <h1>{title}</h1>
      {/* <img src={img} /> */}
      {/* <h3>{content}</h3> */}
      <div className='post-right-side'>

      {/* <button
      onClick = {() => props.deletePost(id)}
      >Delete</button> */}
      <div className='profile-info'>
      <h4>by {author}</h4>
      <ProfileImage author_img={author_img} />
      </div>
      </div>
    </div>
  )
}

const mapDispatchToProps = {
  deletePost, getPost
}


export default connect(null, mapDispatchToProps)(withRouter(Post))
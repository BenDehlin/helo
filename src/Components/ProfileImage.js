import React from 'react'
import {connect} from 'react-redux'


const ProfileImage = (props) => {
  const {author_img, user} = props
  if(author_img){
    return (
      <div>
        <div
        className='profile-pic'
        style={{
        backgroundImage: `url(${author_img})`}}
        ></div>
      </div>
    )
  }
  else{
    return (
      <div>
        {user ? 
        <div
        className='profile-pic'
        style={{
        backgroundImage: `url(${user.img})`}}
        ></div>:
        <div
        className='profile-pic'
        style={{
        backgroundImage: `url(https://robohash.org/)`}}
        ></div>}
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  const {user} = state.authReducer
  return {
    user
  }
}

export default connect(mapStateToProps)(ProfileImage)
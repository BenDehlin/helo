import React from 'react'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {logout} from '../redux/authReducer'
import axios from 'axios'
import home_logo from '../assets/home_logo.png'
import new_logo from '../assets/new_logo.png'
import shut_down from '../assets/shut_down.png'
import ProfileImage from './ProfileImage'

const Nav = (props) => {
    const {push} = props.history
    return (
      <nav>
        <div className='nav-top'>
        <ProfileImage />
        <img 
        className='nav-icons'
        src={home_logo}
        onClick = {() => push('/dashboard')}
        />
        <img
        className='nav-icons'
        src={new_logo}
        onClick = {() => push('/newpost')}
        />
        </div>
        <div className='nav-bottom'>
        <img
        className='nav-icons'
        src={shut_down}
        onClick = {() => {
          axios.post('/auth/logout').then(() => {
            push('/')
          }).catch(err => console.log(err))
        }}
        />
        </div>
      </nav>
    )
}

const mapStateToProps = (state) => {
  const {user} = state.authReducer
  return {
    user
  }
}

const mapDispatchToProps={
  logout
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Nav))
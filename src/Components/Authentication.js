import React, {Component} from 'react'
import {connect} from 'react-redux'
import {login} from '../redux/authReducer'
import {register} from '../redux/authReducer'
import {withRouter} from 'react-router-dom'
import {getUser} from '../redux/authReducer'
import {getPosts} from '../redux/postReducer'
import '../App.css'
import helo_logo from '../assets/helo_logo.png'

class Authentication extends Component{
  constructor(props){
    super(props)
    this.state = {
      username: '',
      password: '',
      register: false
    }
  }
  componentDidMount(){
    const {location, history} = this.props
    const {pathname} = location
    if(pathname === '/register'){
      this.setState({register: true})
    }
  }
  componentDidUpdate(prevProps){
    const {pathname} = this.props.location
    if(pathname !== prevProps.location.pathname && pathname === '/register'){
      this.setState({register: true})
    }else if(pathname !== prevProps.location.pathname && pathname === '/'){
      this.setState({register: false})
    }
  }

  handleChange = ({name, value}) => this.setState({[name]: value})

  handleLogin = () => {
    const {username, password, register} = this.state
    const {push} = this.props.history
    const {getPosts} = this.props
    getPosts()
    if(register){
      this.props.register(username, password)
    }else{
      this.props.login(username, password)
    }
    push('/dashboard')
  }

  render(){
    const {username, password, register} = this.state
    const {push} = this.props.history
    return(
  <div className='login-page'>
    <div className='login-container'>
      <img src={helo_logo} />
      <div className='input-field'>
      <span id='helo'>Helo</span>
      <span>{register ? 
      <button
      onClick={() => push('/')}
      >Switch to Login</button>: 
      <button
      onClick={() => push('/register')}
      >Switch to Register</button>}</span>
      </div>
    <div className='input-field'>
      <input
        value={username}
        name='username'
        placeholder='enter username'
        onChange = {(e) => this.handleChange(e.target)}
      />
    </div>
    <div className ='input-field'>
      <input 
        value={password}
        name='password'
        placeholder='enter password'
        onChange = {(e) => this.handleChange(e.target)}
      />
    </div>
      <button
        onClick = {() => this.handleLogin()}
      >{register ? 'Register' : 'Login'}</button>
    </div>
  </div>
    )
  }
}

const mapStateToProps = (state) => {
  const {user} = state.authReducer
  return {user}
}

const mapDispatchToProps = {
  login, register, getUser, getPosts
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Authentication))
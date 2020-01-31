import React, {Component} from 'react';
import './App.css';
import routes from './routes'
import Nav from './Components/Nav'
import {connect} from 'react-redux'
import {getUser} from './redux/authReducer'
import {getPosts} from './redux/postReducer'
import {withRouter} from 'react-router-dom'

class App extends Component {
  componentDidMount(){
    const {getUser, getPosts} = this.props
    getUser()
    getPosts()
  }

  render(){
    const {pathname} = this.props.location
    return (
      <div className="App">
        {(pathname !== '/' && pathname !== '/register') && <Nav />}
        {routes}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const {user} = state.authReducer
  return {
    user
  }
}

const mapDispatchToProps = {
  getUser, getPosts
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(App))

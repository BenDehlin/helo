import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import { getUser } from '../redux/authReducer'
import {getPosts} from '../redux/postReducer'
import Post from './Post'

class Dashboard extends Component {
  constructor(props){
    super(props)
    this.state = {
      id: '',
      search: '',
      myPost: true,
      user: {id: '', username: '', img: ''}
    }
  }

  componentDidMount(){
    const {getPosts} = this.props
    getPosts()
  }

  handleChange = ({name, value}) => this.setState({[name]: value})

  checkItem(e){
    this.setState({myPost: e.target.checked})
  }

  render(){
    const {search, myPost} = this.state
    const {posts, getPosts, user} = this.props
    return (
      <div className='dashboard'>
        <div className='search-field'>
        <input
        name='search'
        value={search}
        placeholder='Search Posts'
        onChange = {(e) => this.handleChange(e.target)}
        />
        <button
        onClick = {() => {
          getPosts(search, myPost, user.id)
          this.setState({search: ''})
        }}
        >Search</button>
        <button
        onClick = {() => {
          getPosts()
          this.setState({search: ''})
        }}
        >Clear</button>
        <div className='my-posts'>
        My Posts
        <input 
        type='checkbox'
        checked={myPost}
        onChange={(e) => this.checkItem(e)}
        />
        </div>
        </div>
        <div className='post-container'>{posts && posts.map(post => {
          return <Post key={post.id} post={post} />
        })}</div> 
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const {user, loading} = state.authReducer
  const {posts} = state.postReducer
  return {
    posts, user, loading
  }
}

const mapDispatchToProps = {
  getUser, getPosts
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Dashboard))
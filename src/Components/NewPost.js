import React, {Component} from 'react'
import {connect} from 'react-redux'
import {postPost} from '../redux/postReducer'
import {withRouter} from 'react-router-dom'

class NewPost extends Component{
  constructor(props){
    super(props)
    this.state = {
      title: '',
      img: '',
      content: ''
    }
  }

  handleChange = ({name, value}) => this.setState({[name]: value})

  render(){
    const {title, img, content} = this.state
    const {postPost} = this.props
    const {id} = this.props.user || ''
    return(
      <div>
        <input
        name='title'
        value={title}
        placeholder='enter title'
        onChange= {(e) => this.handleChange(e.target)}
        />
        <input
        name='img'
        value={img}
        placeholder='enter img url'
        onChange= {(e) => this.handleChange(e.target)}
        />
        <input
        name='content'
        value={content}
        placeholder='enter content'
        onChange= {(e) => this.handleChange(e.target)}
        />
        <button
          onClick = {() => {
            postPost({title, img: img || 'https://via.placeholder.com/150', content, author_id: id})
            this.setState({title: '', img: '', content: ''})
            this.props.history.push('/dashboard')
          }}
        >Submit Post</button>
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

const mapDispatchToProps = {
  postPost
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(NewPost))
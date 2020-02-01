import React, {Component} from 'react'
import {connect} from 'react-redux'
import {postPost} from '../redux/postReducer'
import {withRouter} from 'react-router-dom'
import no_image from '../assets/no_image.jpg'

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
      <div className='form'>
        <input
        name='title'
        value={title}
        placeholder='enter title'
        onChange= {(e) => this.handleChange(e.target)}
        />
        <img src={img || no_image} />
        <input
        name='img'
        value={img}
        placeholder='enter img url'
        onChange= {(e) => this.handleChange(e.target)}
        />
        <textarea className='content-area'
        name='content'
        value={content}
        placeholder='enter content'
        onChange= {(e) => this.handleChange(e.target)}
        />
        <div className='submit-button-container'>
        <button
          onClick = {() => {
            postPost({title, img: img || 'https://via.placeholder.com/150', content, author_id: id})
            this.setState({title: '', img: '', content: ''})
            this.props.history.push('/dashboard')
          }}
        >Submit Post</button>
        </div>
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
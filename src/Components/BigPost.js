import React, {Component} from 'react'
import {connect} from 'react-redux'
import ProfileImage from './ProfileImage'
import {getPost} from '../redux/postReducer'
import no_image from '../assets/no_image.jpg'
import axios from 'axios'

class BigPost extends Component{
  constructor(props){
    super(props)
    this.state = {
      title:'', img:'', author:'', author_img:'', id:'', author_id:'', content:'' 
    }
  }

  componentDidMount(){
    axios.get(`/api/posts/${this.props.match.params.id}`).then(results => {
      const {id, author, author_img, title, img, content} = results.data
      this.setState({id, author, author_img, title, img, content})
    })
  }

  render(){
    const {title, img, author, author_img, id, author_id, content} = this.state
    return(
      <div className='big-post'>
        <div className='big-post-left'>
          <h1>{title}</h1>
          <img src = {img || no_image} />
        </div>
        <div className='big-post-right'>
        <div className='profile-info'>
          <span>by {author}</span>
          <ProfileImage author_img={author_img} />
        </div>
        <div className='content-box'>
          {content}
        </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const {post} = state.postReducer
  return {
    post
  }
}

const mapDispatchToProps = {
  getPost
}

export default connect(mapStateToProps, mapDispatchToProps)(BigPost)
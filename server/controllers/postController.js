module.exports = {
  // getPosts: (req, res) => {
  //   const db = req.app.get('db')
  //   db.get_posts().then(results => {
  //     res.status(200).send(results)
  //   }).catch(err => res.status(500).send(err))
  // },
  getPosts: (req, res) => {
    const db = req.app.get('db')
    const {search, mypost} = req.query
    const {id} = req.params
    if(mypost === 'true' && search){
      console.log('my posts, search')
      db.filter_posts(search).then(results => {
        return res.status(200).send(results)
      }).catch(err => res.status(500).send(err))
    }else if(mypost === 'false' && search){
      console.log('not my posts, search')
      db.filter_not_my_posts([search, id]).then(results => {
        return res.status(200).send(results)
      }).catch(err => res.status(500).send(err))
    }else if(mypost === 'false'){
      console.log('not my posts, no search')
      db.get_not_my_posts(id).then(results => {
        return res.status(200).send(results)
      }).catch(err => res.status(500).send(err))
    }
    else{
      console.log('default')
      db.get_posts().then(results => {
        res.status(200).send(results)
      }).catch(err => res.status(500).send(err))
    }
  },
  getPost: (req, res) => {
    const db = req.app.get('db')
    const {id} = req.params
    db.get_post(id).then(results => {
      res.status(200).send(results[0])
    }).catch(err => res.status(500).send(err))
  },
  postPost: (req, res) => {
    const db = req.app.get('db')
    const {author_id, title, img, content} = req.body
    db.post_post([author_id, title, img, content]).then(results => {
      res.status(200).send(results)
    }).catch(err => res.status(500).send(err))
  },
  putPost: (req, res) => {
    const db = req.app.get('db')
    const {id} = req.params
    const {author_id, title, img, content} = req.body
    db.put_post([id, author_id, title, img, content]).then(results => {
      res.status(200).send(results)
    }).catch(err => res.status(500).send(err))
  },
  deletePost: (req, res) => {
    const db = req.app.get('db')
    const {id} = req.params
    db.delete_post(id).then(results => {
      res.status(200).send(results)
    }).catch(err => res.status(500).send(err))
  }
}
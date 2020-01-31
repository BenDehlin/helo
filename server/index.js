require('dotenv').config()
const express = require('express')
const session = require('express-session')
const massive = require('massive')
const app = express()
const {SESSION_SECRET, CONNECTION_STRING, SERVER_PORT} = process.env
const authCtrl = require('./controllers/authController')
const postCtrl = require('./controllers/postController')
const authMid = require('./middleware/authMiddleware')
// const cors = require('cors')

// app.use(cors())
app.use(express.json())
app.use(session({
  secret: SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: {maxAge: 1000 * 60 * 60}
}))

massive(CONNECTION_STRING).then(db => {
  app.set('db', db)
  console.log('Database connected')
  app.listen(SERVER_PORT, () => console.log(`Server listening on ${SERVER_PORT}`))
}).catch(err => console.log(err))

//ENDPOINTS
//auth endpoints
app.post('/auth/register', authCtrl.register)
app.post('/auth/login', authCtrl.login)
app.post('/auth/logout', authCtrl.logout)
app.get('/auth/user', authCtrl.getUser)

//post endpoints
app.get('/api/posts/', postCtrl.getPosts)
app.get('/api/posts/:id', postCtrl.getPosts)
app.get('/api/post/:id', postCtrl.getPost)
app.post('/api/posts', authMid.userOnly, postCtrl.postPost)
app.put('/api/posts/:id', postCtrl.putPost)
app.delete('/api/posts/:id', postCtrl.deletePost)
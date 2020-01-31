module.exports = {
  userOnly: (req, res, next) => {
    if(!req.session.user){  
      console.log('fail')    
      return res.status(401).send('User not logged in')
    }
    console.log(req.session.user)
    next()
  }
}
const express = require('express');
const path = require('path');
const router = express.Router();
const passport = require('passport');

//auth login
router.get('/login', (req, res) => {
    console.log('inside login router.get')

    //here is where we serve up our login page
    res.send('Hello?')
})

//auth with google
router.get('/google', passport.authenticate('google', {
    scope: ['profile','email']
}))

//auth logout
router.get('/logout', (req, res) => {
    //this will be handled later with passport
    req.logout();
    res.redirect('/');
})

//callback route for google to redirect to 

// this will be used to check if a user is logged in so they can see their profile, or if they should be sent to the login page
// const authCheck = (req,res,next) => {
// if(!req.user){
//     //if user is not logged in
//     res.redirect('/auth/login')
// } else {
//     next()
// }
// }
router.get('/google/redirect',passport.authenticate('google'),(req, res) => {
    // res.send(req.user)
    //sending our OAuth user data
    console.log('about to redirect home', res)
    res.redirect('/')
});

module.exports = router;
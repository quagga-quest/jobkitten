const express = require('express');
const path = require('path');
const router = express.Router();
const passport = require('passport');

//auth login
router.get('/login', (req, res) => {
    console.log('inside login router.get', req.body)

    //here is where we serve up our login page
    res.send('Hello?')
})

//auth with google
router.get('/google', passport.authenticate('google', {
    scope: ['profile','email']
}))

// router.get('/google/redirect',passport.authenticate('google',{
//     successRedirect: 'http://localhost:3333/',
//     failureRedirect: '/auth/error',
//   })
// );


router.get('/google/redirect',passport.authenticate('google'),(req, res) => {
    console.log('google/auth req.user', req.user.rows[0].user_id)
    res.header('Access-Control-Allow-Origin', '*');
    res.locals.body = req.user.rows[0]
console.log('This it the res.locals.body res!!!!!!!!!!!!', res.locals.body)
    //sending our OAuth user data
    console.log('about to redirect home')
    res.redirect('http://localhost:8080/')
});


//auth login
router.get('/googlelogin', (req, res) => {
    console.log('inside login router.get', req.locals.body)

    //here is where we serve up our login page
    res.send('Hello?')
})

//auth logout
router.get('/logout', (req, res) => {
    //this will be handled later with passport
    req.logout();
    res.redirect('/');
})

//callback route for google to redirect to 

// // this will be used to check if a user is logged in so they can see their profile, or if they should be sent to the login page
// const authCheck = (req,res,next) => {
// if(!req.user){
//     //if user is not logged in
//     res.redirect('/auth/login')
// } else {
//     next()
// }
// }


module.exports = router;
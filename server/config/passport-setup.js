const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20')
require('dotenv').config();
const db = require('../models/dbModel')


//serialize user's oauth_id for our cookie
passport.serializeUser((user, done) => {
    // console.log('inside serialize user', user.rows)
    done(null, user.rows[0].user_id)
})

passport.deserializeUser( async (id, done) => {
    // we need to pass in the user we're making the cookie for in done, so we will grab that user (again) via their oath_id in our query string
    // console.log('inside deserializUser', id)
    const userQuery = 'SELECT * FROM users WHERE oauth_id = $1'
    const queryParam = [id]
    //query db to find user based on their oath_id
    const user = await db.query(userQuery,queryParam)
    //pass user into done
    // console.log('invoking done in deserializeUser')
    done(null, user)
    // console.log('passed done in deserializeUser')

})

passport.use(
    new GoogleStrategy({
    //options for the strategy
    //need to add a redirectURL, found in our google developer console
    callbackURL: '/auth/google/redirect',
    //need a client ID and a client secret
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET
}, async (req,accessToken, refreshToken,profile,done) => {
    // console.log('inside passport.use')

    //passport callback function
    // check if user exists in our db first
    try {
        const findUserStr = `SELECT EXISTS (SELECT * FROM USERS WHERE oauth_id=$1)` 
        //finduser params
        const authID = profile.id
        const query2 = [authID]

        //insert string params
        const {givenName,familyName} = profile.name
        const emails = profile.emails[0].value
        const profileImage = profile.photos[0].value
        const insertUser = `INSERT INTO USERS (first_name1, last_name1, username, email, profile_Image, display_name_1, oauth_id) VALUES 
        ($1, $2, $3, $4, $5, $6, $7)`
        const findUserQuery = [givenName, familyName, emails, emails, profileImage, givenName, authID]
        //check if user exists in db
        const response = await db.query(findUserStr, query2)
        //if user does not exists, query the db again to add the user
        if(!response.rows[0].exists) await db.query(insertUser,findUserQuery)
        //otherwise query the database to find the ID of the newly added user 
        const userQuery = 'SELECT * FROM USERS WHERE oauth_id = $1'
        //assign a var the value of findind the newly added or already added user in table and assign it as second arg in done()
        const user = await db.query(userQuery,query2)
        done(null,user)
    } catch(error) {
        console.log('error in try passport-setup', error)
    }
    
})
)
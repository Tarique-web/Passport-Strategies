
const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const Google = require('../Model/google')

const DateTime = require('../Routes/DateTime')
passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: 'http://localhost:5000/auth/google/callback'
    
},

    async (accessToken, refreshToken, profile, done) => {


        const data = {
            google_id: profile.id,
            DisplayName: profile.displayName,
            email: profile._json.email,
            picture: profile._json.picture,
            DateTime:DateTime
        }
        // console.log(data);
        
        const userData = await Google.query().select('*').from("google").where('google_id', data.google_id);
        // console.log(userData);
        if (userData.length > 0) {

            const google = await Google.query().update(data).where('google_id', data.google_id);
            done(null, google)
            console.log("sucessfully update")

        } else {
            const google = await Google.query().insertGraph(data)

            done(null, google)
            console.log("sucessfully insert")
        }
       

    }


));

passport.serializeUser((user, done) => {
    done(null, user);
});

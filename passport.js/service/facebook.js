
const Facebook = require('../Model/facebook');
const FacebookStrategy = require('passport-facebook').Strategy;
const passport = require('passport')
const DateTime = require('../Routes/DateTime')


passport.use(new FacebookStrategy({
    clientID: process.env.FACEBOOK_CLIENT_ID,
    clientSecret: process.env.FACEBOOK_SECRET,
    callbackURL: "http://localhost:5000/auth/facebook/callback",
    profileFields: ['displayName', 'photos', 'email']
},
    async(accessToken, refreshToken, profile, done) => {

        const data = {
            facebook_id: profile.id,
            displayName: profile.displayName,
            DateTime:DateTime
            
        }
        const userData = await Facebook.query().select('*').from("facebook").where('facebook_id', data.facebook_id);
        console.log(userData);
        if (userData.length>1) {
            
            const facebook = await Facebook.query().update(data).where('facebook_id', data.facebook_id);
            done(null, facebook)
            console.log("sucessfully update")
          
        } else {
            const facebook = await Facebook.query().insert(data)
            done(null, facebook)
            console.log("sucessfully insert")
        }
        
    }));




// passport.serializeUser((user, done) => {
//     done(null, user);
// });


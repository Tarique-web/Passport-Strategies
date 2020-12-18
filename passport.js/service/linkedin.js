
const passport = require('passport')
var LinkedInStrategy = require('passport-linkedin-oauth2').Strategy;

const Linkedin = require('../Model/linkedin')
const DateTime = require('../Routes/DateTime')

passport.use(new LinkedInStrategy({
    clientID: process.env.LINKEDIN_CLIENT_ID,
    clientSecret: process.env.LINKEDIN_CLIENT_SECRET,
    callbackURL: "http://localhost:5000/auth/linkedin/callback",
    scope: ['r_emailaddress', 'r_liteprofile'],

},
    async (accessToken, refreshToken, profile, done) => {

        const data = {
            linkedin_id: profile.id,
            displayName: profile.displayName,
            DateTime:DateTime

        }
        const userData = await Linkedin.query().select('*').from("linkedin").where('linkedin_id', data.linkedin_id);
        if (userData.length > 1) {

            const linkedin = await Linkedin.query().update(data).where('linkedin_id', data.linkedin_id);
            done(null, linkedin)
            console.log("sucessfully update")

        } else {
            const linkedin = await Linkedin.query().insertGraph(data)

            done(null, linkedin)
            console.log("sucessfully insert")
        }


        // console.log(data);
    }));
passport.serializeUser((user, done) => {
    done(null, user);
});

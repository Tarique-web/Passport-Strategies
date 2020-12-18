
const GitHubStrategy = require("passport-github2").Strategy
const passport = require('passport')

const Github = require('../Model/github')
const DateTime = require('../Routes/DateTime')


passport.use(new GitHubStrategy({
    clientID: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    callbackURL: "http://localhost:5000/auth/github/callback",

},
    async (accessToken, refreshToken, profile, done) => {
    
        const data = {
            github_id: profile.id,
            DisplayName: profile.username,
            DateTime:DateTime
            
        }
        const userData = await Github.query().select('*').from("github").where('github_id', data.github_id);
        // console.log(userData);
        if (userData.length > 1) {

            const github = await Github.query().update(data).where('github_id', data.github_id);
            done(null, github)
            console.log("sucessfully update")

        } else {
            const github = await Github.query().insertGraph(data)

            done(null, github)
            console.log("sucessfully insert")
        }
    
    }));

passport.serializeUser((user, done) => {
    done(null, user);
});




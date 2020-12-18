// const { authenticate } = require("passport")

module.exports = (router, passport) => {
    router
        .get("/auth/github/", passport.authenticate('github', {
            scope: ['profile', "email"]


        }))


        .get('/auth/github/callback', passport.authenticate('github', { failureRedirect: '/login' }),
            function (req, res) {
                console.log(res.req.user, "this is res");
                res.send({ "success": `hello ${res.req.user.displayName} successfully log in ` });

            });

}
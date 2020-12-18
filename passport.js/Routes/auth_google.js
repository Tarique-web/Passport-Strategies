module.exports = (router, passport) => {


    router
        .get("/", (req, res) => {

            res.send("Hello world")
        })
        .get("/auth/google", passport.authenticate('google', {
            scope: ['profile', "email"]


        }))

        .get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/login' }),
             (req, res) => {
                // console.log(res.req.user, "this is res");
                res.send({ "success": `hello ${res.req.user.displayName} successfully log in ` });

            });

    router.get("/google/logout", (req, res) => {
        req.logout()
        res.send(req.user)
    })

}
module.exports = (router, passport) => {

    router
        .get("/auth/facebook", passport.authenticate('facebook', { scope: ['user_friends', 'manage_pages'] }))


    router.get('/auth/facebook/callback', passport.authenticate('facebook', {failureRedirect: '/login' }),
        function (req, res) {
            console.log(res.req.user, "this is res");
            res.send({"success":`hello ${res.req.user.displayName} successfully log in `});

        })

    router.get("/facebook/logout",(req,res)=>{
        req.logout()
        res.send(res.req.user)
    })


}
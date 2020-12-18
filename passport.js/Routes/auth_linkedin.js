module.exports = (router, passport) => {
    router
        .get("/auth/linkedin", passport.authenticate('linkedin',{ state: 'SOME STATE'  }));
          


       router.get('/auth/linkedin/callback', passport.authenticate('linkedin', { failureRedirect: '/login' }),
        function (req, res) {
            res.send({"success":`hello ${res.req.user.displayName} successfully log in `});
            // res.redirect('/home');
        });


    router.get("/linkedin/logout",(req,res)=>{
        req.logout()
        res.send(res.req.user)
    })

}
const express = require('express');

const router = express.Router();

router.get('/login', (req, res, next) => {
    //console.log(req.get('Cookie').split(';')[1].trim().split('=')[1]);
    res.render('auth/login', {
        path: '/login',
        pageTitle: 'Login',
        isLoggedIn: req.session.isLoggedIn
    });
});

router.post('/login', (req, res, next) => {
    //res.setHeader('Set-Cookie', 'loggedIn=true');
    req.session.isLoggedIn = true;
    res.redirect('/inicial');
});

module.exports = router;
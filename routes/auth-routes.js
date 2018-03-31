const router = require('express').Router();
const passport = require('passport');


router.get('/login', (req, res) => {
	res.send('login');
})

router.get('/google', passport.authenticate('google', {
	scope: ['profile']
}));

// callback route for google
router.get('/google/redirect', (req, res) => {
	res.send('you reached the CB URI');
})

router.get('/github', passport.authenticate('github', {
	scope: ['profile']
}));

router.get('/github/redirect', passport.authenticate('github'), (req, res) => {
	//req.user contains userinfo
	res.send(req.user);
})

router.get('/logout', (req, res) => {
	res.send('logged out');
})



module.exports = router;
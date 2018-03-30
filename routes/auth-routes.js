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
	scope: ['user']
}));

router.get('/github/redirect', (req, res) => {
	res.send('you reached the CB URI for GITHUB');
})

router.get('/logout', (req, res) => {
	res.send('logged out');
})



module.exports = router;
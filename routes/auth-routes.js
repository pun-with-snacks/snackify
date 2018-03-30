const router = require('express').Router();
const passport = require('passport');


router.get('/login', (req, res) => {
	res.send('login');
})

router.get('/google', passport.authenticate('google', {
	scope: ['profile']
}));

router.get('/logout', (req, res) => {
	res.send('logged out');
})

//callback route for google
router.get('/google/redirect', (req, res) => {
	res.send('you reached the CB URI');
})

module.exports = router;
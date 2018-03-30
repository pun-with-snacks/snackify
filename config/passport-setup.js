const passport = require('passport');
const googleAuth = require('passport-google-oauth20');
const keys = require('./keys');

passport.use(
	new googleAuth({
		//google strat
		callbackURL: '/auth/google/redirect',
		clientID: keys.google.clientID,
		clientSecret: keys.google.clientSecret,
	}, () => {
		
	}
));
const passport = require('passport');
const googleAuth = require('passport-google-oauth20');
const githubStrat = require('passport-github');
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

passport.use( 
	new githubStrat({
		callbackURL: '/auth/github/redirect',
		clientID: keys.github.clientID,
		clientSecret: keys.github.clientSecret,
	}, (accessToken, refreshToken, profile, done) => {
		
	}
));
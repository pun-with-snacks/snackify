const express = require('express');
const authRoutes = require('./routes/auth-routes');
const passportSetup = require('./config/passport-setup');
const path = require('path');
const cors = require('cors');
const pg = require('pg');
const passport = require('passport');
const cookieSession = require('cookie-session');
const keys = require('./config/keys');

const app = express();

app.use(express.static('.'));


app.use(cookieSession({
	maxAge: 24*60*60*1000,
	keys: [keys.session.cookieKey]
}));
app.use(passport.initialize());
app.use(passport.session());




let user = 'ulurpczi';
let pass = 'TVQxxaVGcvh2ZFlNZHXaHReKN_3DfZbm';
let config = {
	host:"nutty-custard-apple.db.elephantsql.com",
	user: user,
	password: pass,
	database: user,
	post: 5432,
	ssl: true
}
//Generating pool API
let pool = new pg.Pool(config);
let db;

pool.connect((err, result) => {
  if (err) throw new Error(err);
  else console.log("Connecting to DB"); 
	db = result;

	app.use('/auth', authRoutes);

	app.get('/', (req, res) => {
		res.sendFile(path.join(__dirname, 'index.html'));
	})

	app.get('/test', (req, res) => {
		// db.query('SELECT * from snackify;', (err, result) => {
		// 	if(err) throw err;
		// 	res.send(result);
		// });
		res.send(req.user);
	})

	app.listen(3000, () => {
		console.log('listening on port 3000');
	});

})

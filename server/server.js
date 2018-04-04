const express = require('express');
const authRoutes = require('../routes/auth-routes');
const passportSetup = require('../config/passport-setup');
const path = require('path');
const cors = require('cors');
const pg = require('pg');
const passport = require('passport');
const cookieSession = require('cookie-session');
const keys = require('../config/keys');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const app = express();


const port = 3000; // @todo: update to be `process.env.PORT || 3000;` for external/heroku hosting
const dbConfig = require('./db-config.js');

app.use('/build', express.static(path.join(__dirname, '../build')));
// app.use('/public', express.static('public'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieSession({
	maxAge: 24 * 60 * 60 * 1000, // NOTE: max age = entire day (then you have to log back in)
	keys: [ keys.session.cookieKey ]
}));

// NOTE: for oAuth
app.use(passport.initialize());
app.use(passport.session());

// NOTE: for tracking user sessions
app.use(cookieParser());

//Generating pool API
const pool = new pg.Pool(dbConfig);
pool.connect((err, result) => {
	if (err) throw new Error(err);
	else console.log("Connecting to DB...");
	const db = result;

	app.use('/auth', authRoutes);


	////////////////
	//////home/////
	///////////////

  // TODO: should direct you to index.html if and only if you're logged in
	app.get('/', (req, res) => {
		if (req.user) res.sendFile(path.join(__dirname, '../index.html'));
		else res.redirect('/login');
	});

  app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '../login.html'));
  })

  // NOTE:
	app.post('/submission', (req, res) => {
		db.query(`SELECT submissionCount from snackify where "userName" = '${req.body.userName}';`, (err, count) => {
      // CHANGED: added if statement so it doesn't break
      if (count.rows.length > 0) {
        if (count.rows[0].submissioncount === 0) {
  				res.send('You Eat Too Much');
  			} else {
  				db.query(`UPDATE snackify SET submissionCount = submissionCount -1 WHERE "userName" = '${req.body.userName}';
  				  UPDATE snackify SET snackphoto = '${req.body.snackPhoto}' WHERE "userName" = '${req.body.userName}';
  				  UPDATE snackify SET comment = '${req.body.comment}' WHERE "userName" = '${req.body.userName}';`,
  					(err, result) => {
  						if (err) throw new Error(err);
  						res.send('successfully posted');
  					});
  			}
      }
		});

	});


  // TODO: fix query
	app.get('/cart', (req, res) => {
    const queryString = `SELECT "userName", snackphoto, votes, comment FROM snackify WHERE snackphoto IS NOT NULL;`;

		db.query(queryString, (err, result) => {
								const resultArr = [];
                if (result) {
  								const rows = result.map((col) => {
  									return col.rows;
  								});

								for(let i = 0 ; i < rows[0].length; i++){
										const userObj = {};
										userObj.userName = rows[0][i];
										userObj.snackPhoto = rows[1][i];
										userObj.votes = rows[2][i];
										userObj.comment = rows[3][i];
										resultArr.push(userObj);
								}
              }
              res.json(resultArr);

			});
	})



	app.get('/test', (req, res) => {
    const queryString = `SELECT "userName", snackphoto, votes, comment FROM snackify WHERE snackphoto IS NOT NULL;`;

		db.query(queryString, (err, result) => {
								const resultArr = [];
                if (result) {
                  const rows = result.map((col) => {
  									return col.rows;
  								})
  								for(let i = 0 ; i < rows[0].length; i++){
  										const userObj = {};
  										userObj.userName = rows[0][i].userName;
  										userObj.snackPhoto = rows[1][i].snackphoto;
  										userObj.votes = rows[2][i].votes;
  										userObj.comment = rows[3][i].comment;
  										resultArr.push(userObj);
  								}
  								req.user = JSON.parse(req.user);
  								req.user.cart = resultArr;
                }
								res.json(req.user);
			});
	});




	app.listen(port, () => {
		console.log(`listening on port ${port}...`);
	});

})

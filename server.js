const express = require('express');
const authRoutes = require('./routes/auth-routes');
const passportSetup = require('./config/passport-setup');
const path = require('path');
const cors = require('cors');
const pg = require('pg');
const passport = require('passport');
const cookieSession = require('cookie-session');
const keys = require('./config/keys');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const app = express();


app.use('/build', express.static(path.join(__dirname, 'build')));
// app.use('/public', express.static('public'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieSession({
	maxAge: 24 * 60 * 60 * 1000,
	keys: [keys.session.cookieKey]
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(cookieParser());



let user = 'ulurpczi';
let pass = 'TVQxxaVGcvh2ZFlNZHXaHReKN_3DfZbm';
let config = {
	host: "nutty-custard-apple.db.elephantsql.com",
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
	else console.log("Connecting to DB...");
	db = result;

	app.use('/auth', authRoutes);


	////////////////
	//////home/////
	///////////////

	app.get('/', (req, res) => {
		if (req.user) res.sendFile(path.join(__dirname, 'index.html'));
		else res.redirect('/login');
	});

	app.post('/submission', (req, res) => {
		db.query(`SELECT submissionCount from snackify where "userName" = '${req.body.userName}';`, (err, count) => {
			if (count.rows[0].submissioncount === 0) {
				res.send('You Eat Too Much');
			} else {
				db.query(`UPDATE snackify SET submissionCount = submissionCount -1 WHERE "userName" = '${req.body.userName}';
				  UPDATE snackify SET snackphoto = '${req.body.snackPhoto}' WHERE "userName" = '${req.body.userName}';
				  UPDATE snackify SET comments = '${req.body.comments}' WHERE "userName" = '${req.body.userName}';`,
					(err, result) => {
						if (err) throw new Error(err);
						res.send('successfully posted');
					});
			}
		});

	})

	app.post('/gallery', (req,res)=>{
		db.query(`SELECT "userName" FROM snackify WHERE snackphoto IS NOT NULL;
							SELECT snackphoto FROM snackify;
							SELECT votes FROM snackify WHERE snackphoto IS NOT NULL;
							SELECT comments FROM snackify WHERE snackphoto IS NOT NULL;
							`,(err,result)=>{
				if(err){
						throw new Error(err)
				}
		});
}) 

	//=================================================================

	app.get('/login', (req, res) => {
		res.sendFile(path.join(__dirname, 'login.html'));
	})

	app.get('/test', (req, res) => {
		res.json(req.user);
		// res.sendFile(path.join(__dirname, 'index.html'));
		// res.send(`this is my body ${req.user} `); 
	});


	// app.post('/submission', (req, res) => {
	// 	console.log('got here');
	// 	db.query(`UPDATE snackify SET submissionCount = submissionCount -1 WHERE "userName" = '${req.user.userName}';
	// 			  UPDATE snackify SET snackphoto = '${req.user.snackphoto} WHERE "userName" = ${req.user.userName}';
	// 			  UPDATE snackify SET comments = '${req.user.comments}' WHERE "userName" = ${req.user.userName}';`,
	// 		(err, result) => {
	// 			if (err) throw new Error(err);
	// 			res.send('successfully posted');
	// 		});
	// });

	app.post('Populating Front End with stuff', (req, res) => {
		db.query(`UPDATE snackify SET submissionCount = submissionCount -1 WHERE '${req.user.userName}';
				  UPDATE snackify SET snackphoto = '${req.user.snackphoto} WHERE '${req.user.userName}';
				  UPDATE snackify SET comments = '${req.user.comments}' WHERE '${req.user.userName}'`,
			(err, result) => {
				if (err) {
					throw new Error(err)
				}
			});


	})


	app.listen(3000, () => {
		console.log('listening on port 3000...');
	});

	// app.post('/submission',(req,res)=> {
	// 	db.query(`UPDATE snackify SET votecount = votecount - 1 WHERE '${req.user.userName}';`, (err, result) => {
	// 		if(err){
	// 			throw new Error(err)
	// 		}
	// 	});
	// 	db.query('UPDATE snackify SET votes = votes + 1 WHERE ;', (err, result) => {
	// 		if(err){
	// 			throw new Error(err)
	// 		}
	// 	});
	// });

})




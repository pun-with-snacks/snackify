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
const cookieParser = require('cookie-parser'); 


app.use('/build',express.static(path.join(__dirname, 'build')));
app.use(express.static('public'));


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
  else console.log("Connecting to DB..."); 
	db = result;

	app.use('/auth', authRoutes);


	////////////////
	//////home/////
	///////////////

	app.get('/', (req, res) => {
		if(req.user) res.sendFile(path.join(__dirname, 'index.html'));
		else res.redirect('/login');
	});
	
	//=================================================================

	app.get('/login', (req, res) => {
		res.sendFile(path.join(__dirname, 'login.html'));
	})
	
	app.get('/test', (req, res) => {
		res.send(req.user); 
		// res.sendFile(path.join(__dirname, 'index.html'));
		// res.send(`this is my body ${req.user} `); 
	}); 


	app.post('/submission',(req,res)=>{
		db.query(`UPDATE snackify SET submissionCount = submissionCount -1 WHERE '${req.user.userName}';
				  UPDATE snackify SET snackphoto = '${req.user.snackphoto} WHERE '${req.user.userName}';
				  UPDATE snackify SET comments = '${req.user.comments}' WHERE '${req.user.userName}'`, 
		(err,result)=>{
			if(err){
				throw new Error(err)
			}
		});
		// db.query(`UPDATE snackify SET snackphoto = '${req.user.snackphoto} WHERE '${req.user.userName}';`, (err,result)=>{
		// 	if(err){
		// 		throw new Error(err)
		// 	}
		// });	
		// db.query(`UPDATE snackify SET comments = '${req.user.comments}' WHERE '${req.user.userName}';`, (err,result)=>{
		// 	if(err){
		// 		throw new Error(err)
		// 	}
		// });
	});

	app.post('Populating Front End with stuff',(req,res)=>{
		db.query(`UPDATE snackify SET submissionCount = submissionCount -1 WHERE '${req.user.userName}';
				  UPDATE snackify SET snackphoto = '${req.user.snackphoto} WHERE '${req.user.userName}';
				  UPDATE snackify SET comments = '${req.user.comments}' WHERE '${req.user.userName}'`, 
		(err,result)=>{
			if(err){
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




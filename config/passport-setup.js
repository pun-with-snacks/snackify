const passport = require('passport');
const githubStrat = require('passport-github');
const keys = require('./keys');
const pg = require('pg');
const dbConfig = require('../server/db-config.js');

dbConfig.ssl = true;

//Generating pool API
let pool = new pg.Pool(dbConfig);
let db;

pool.connect((err, result) => {
	if (err) throw new Error(err);
	else console.log("Connecting to DB");
	db = result;
	//////////////////////////////////////////////
	passport.serializeUser((user, done) => {
		// maybe id if _id undefined
		// console.log(user+'<====serializer');
		done(null, user);
		// 'phillip
	})

	passport.deserializeUser((id, done) => {
		//find _id that matches id
		// console.log(id+'<=====deserializer');
		done(null, id);
	})

	///////////////////////////////////

	passport.use(
		new githubStrat({
			callbackURL: 'http://localhost:3000/auth/github/redirect',
			clientID: keys.github.clientID,
			clientSecret: keys.github.clientSecret,
		}, (accessToken, refreshToken, profile, done) => {
			db.query(`SELECT "gitHandle" from "User" where "gitHandle" = '${profile.username}';`, (err, result) => {
				if (err) throw err;
				if (result && Array.isArray(result.rows) && !result.rows.length === 0) {
          const avatarPhoto = profile && Array.isArray(profile.photos) && profile.photos.length > 0 ? profile.photos[0].value : 'AvatarPhotoError';
					db.query(`INSERT INTO "User" ("gitHandle", "gitAvatar", "votesRemaining", "isAdmin")
					VALUES ('${profile.username}', ${avatarPhoto}, ${3}, ${false});`, (err, user) => {
							if (err) console.log('Im the error from insert ' + err);
							db.query(`SELECT * FROM "User" WHERE "gitHandle" = '${profile.username}';`, (err, user) => {
                // console.log('user:', user);
                // console.log('profile:', profile);

								if (user && Array.isArray(user.rows) && user.rows.length > 0) done(null, user.rows[0].gitHandle);
                else done(null, 'Insertion error!');
							});
						});
				} else {
					db.query(`SELECT * FROM "User" WHERE "gitHandle" = '${profile.username}';`, (err, user) => {
            const rows0 = result && Array.isArray(result.rows) && !result.rows.length > 0 ? user.rows[0] : undefined;
            console.log("ROWSSSSSSSS", rows0)
            done(null, JSON.stringify(rows0));
					});
				}
			});
}
));

})


const Scraper = require('../../lib/scraper.js');
const Parser = require('../../lib/parser.js');
const Cleaner = require('../../lib/cleaner.js');

module.exports = {

	scrapeAll: Scraper.scrapeAll,
	parseAll: Parser.parseAll,
	cleanAll: Cleaner.cleanAll,

  login: (req, res, next) => {
		if (req.user) res.sendFile(path.join(__dirname, 'index.html'));
		else res.redirect('/login');
	},

  selectNewItem: (req, res) => {
	db.query(`INSERT INTO FoodItem VALUES '${req.body.foodName}',
	  '${req.body.imgUrl}', '${req.body.price}', '${req.body.comment}';
	`);
	res.send('Successfully Posted');
  },

  populateGallery: (req, res) => {
		db.query(`SELECT "FoodItem"."imgUrl", "FoodItem"."foodName", "FoodItem"."comment", "VotingStore"."totalVotes"
		FROM "FoodItem" INNER JOIN "VotingStore" ON "VotingStore"."foodItemId" = "FoodItem"."_id";
		`, (err, result) => {
			if (err) {
				throw err;
			}
			console.log(result)
			res.json(result);
		}
  )},

  upvote: (req, res) => {
	  db.query(`UPDATE VotingStore SET totalVotes = totalVotes - 1 WHERE _id = ${req.body.userID},
	  		    UPDATE User SET votesRemaining = votesRemaining -1 WHERE _id = ${req.body.userID}
	  `);

  },

  logout: (req, res) => {

  }

//   db.query(`SELECT "userName" FROM snackify WHERE snackphoto IS NOT NULL;
//   SELECT snackphoto FROM snackify WHERE snackphoto IS NOT NULL;
//   SELECT votes FROM snackify WHERE snackphoto IS NOT NULL;
//   SELECT comments FROM snackify WHERE snackphoto IS NOT NULL;`,)
}

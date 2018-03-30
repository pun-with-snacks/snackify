const express = require('express');
const authRoutes = require('./routes/auth-routes');
const passportSetup = require('./config/passport-setup');
const path = require('path');
const cors = require('cors');

const app = express();

app.use(express.static('build'));
//app.use(cors({origin: 'http://localhost:3000'}));
// app.use((req, res, next) => {

// 	// Website you wish to allow to connect
// 	res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

// 	// Request methods you wish to allow
// 	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

// 	// Request headers you wish to allow
// 	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

// 	// Set to true if you need the website to include cookies in the requests sent
// 	// to the API (e.g. in case you use sessions)
// 	res.setHeader('Access-Control-Allow-Credentials', true);

// 	// Pass to next layer of middleware
// 	next();
// });
app.use('/auth', authRoutes);

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, 'index.html'));
})





app.listen(3000, () => {
	console.log('listening on port 3000');
});

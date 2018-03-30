const express = require('express');
const authRoutes = require('./routes/auth-routes');
const passportSetup = require('./config/passport-setup');
const path = require('path');
const cors = require('cors');

const app = express();

app.use(express.static('.'));

app.use('/auth', authRoutes);

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, 'index.html'));
})





app.listen(3000, () => {
	console.log('listening on port 3000');
});

const express = require('express');
const authRoutes = require('./routes/auth-routes');
const passportSetup = require('./config/passport-setup');
const path = require('path');

const app = express();

app.use(express.static('build'));


app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, 'index.html'));
})

app.use('/auth', authRoutes);



app.listen(3000,()=>{
	console.log("Listening on 3000")
});

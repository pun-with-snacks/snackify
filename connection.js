const pg = require('pg');
const uri = 'postgres://ulurpczi:TVQxxaVGcvh2ZFlNZHXaHReKN_3DfZbm@nutty-custard-apple.db.elephantsql.com:5432/ulurpczi';
let db;


pg.connect(uri, (err, result) => {
  if (err){
    throw new Error(err);
  }else{
    console.log("Connecting to DB"); 
  }
  db = result;  

  db.query('SELECT * FROM snackify;', (err, result) => {
    console.log('------>Looking for rows', result.rows);
  });

});


module.exports = db;

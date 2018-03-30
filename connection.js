const express = require('express');
const app = express();
const pg = require('pg');
var format = require('pg-format')
//elephantsql login info
var user = 'ulurpczi';
var pass = 'TVQxxaVGcvh2ZFlNZHXaHReKN_3DfZbm';
//
const uri = 'postgres://ulurpczi:TVQxxaVGcvh2ZFlNZHXaHReKN_3DfZbm@nutty-custard-apple.db.elephantsql.com:5432/ulurpczi';
var config = {
    host:"nutty-custard-apple.db.elephantsql.com",
    user: 'ulurpczi',
    password: 'TVQxxaVGcvh2ZFlNZHXaHReKN_3DfZbm',
    database:'ulurpczi',
    post: 5432,
    ssl: true
    //includes, username, password, as per much headache and https://node-postgres.com/features/connecting#connection-uri
}

// const config = {
//     host: '<your-db-server-name>.postgres.database.azure.com',
//     // Do not hard code your username and password.
//     // Consider using Node environment variables.
//     user: '<your-db-username>',     
//     password: '<your-password>',
//     database: '<name-of-database>',
//     port: 5432,
//     ssl: true
// };

//Generating pool API
var pool = new pg.Pool(config)
let db;

pool.connect((err, result) => {
  if (err){
    throw new Error(err);
  }else{
    console.log("Connecting to DB"); 
  }
  db = result;
  db.query('SELECT * FROM snackify;', (err, result) => {
      if(err){
          throw new Error(err)
      }
    console.log('------>Looking for rows', result.rows);
    db.end();
  });
});


module.exports = db;

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
    connectionString:uri
}

//Generating pool API
var pool = new pg.Pool(config);
let db;

pool.connect((err, result) => {
  if (err){
    throw new Error(err);
  }else{
    console.log("Connecting to DB"); 
  }
  db = result;  

  db.query('SELECT * FROM snackify;', (err, result) => {
    console.log('------>Looking for rows', result.rows);
  });
  db.end();
});


module.exports = db;

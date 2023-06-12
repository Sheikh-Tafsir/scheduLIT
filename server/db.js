const mysql = require('mysql2');

const db= mysql.createConnection({
    host:   'localhost',
    user: "taf",
    password: "taf30",
    database: "loginsystem"
    //insecureAuth : true
});

db.connect((error) => {
    if (error) {
      console.error('Error connecting to the database:', error);
      return;
    }
    console.log('Connected to the database');
  });
  
  module.exports = db;
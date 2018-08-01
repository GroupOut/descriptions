const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  // password: 'Af234rew',
  database: 'descriptions',
});

connection.connect(err => {
  if (err) {
    console.log('Problem connecting to mysql descriptions_db.', err);
  } else {
    console.log('Connected to mysql descriptions_db.');
  }
});

module.exports = connection;

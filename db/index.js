const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Af234rew',
  database: 'descriptions',
});

connection.connect(err => {
  if (err) {
    console.log('problem connecting to mysql', err);
  } else {
    console.log('connected to mysql!');
  }
});

module.exports = connection;

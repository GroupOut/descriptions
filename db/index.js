const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Af234rew',
  database: 'descriptions',
});

connection.connect();

connection.query('SELECT * from deal', (error, results, fields) => {
  if (error) throw error;
  console.log('The solution is: ', results);
});

connection.end();

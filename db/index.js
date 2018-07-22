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

// const dealTableRecordCount = () => {
//   connection.query('SELECT * from deal', (error, results, fields) => {
//     if (error) throw error;
//     console.log('The deal table contains', results.length, 'records.');
//   });
// };
// dealTableRecordCount();

// connection.end();

module.exports = connection;
// dealTableRecordCount,

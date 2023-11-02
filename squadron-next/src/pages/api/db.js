const mysql = require('mysql');

// const db = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: 'RahulSQL2002',
//   database: 'squadron',
// });

const db = mysql.createConnection({
  host: 'sql12.freesqldatabase.com',
  user: 'sql12657494',
  password: 'UqMfk6wVu4',
  database: 'sql12657494',
});


db.connect(err => {
  if (err) {
    console.error('Database connection error: ' + err.stack);
    return;
  }
  console.log('Connected to the database');
});

export default db;
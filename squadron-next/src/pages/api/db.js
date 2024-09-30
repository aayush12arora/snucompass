const mysql = require('mysql');

// const db = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: 'RahulSQL2002',
//   database: 'squadron',
// });

const db = mysql.createConnection({
  host: 'sql6.freesqldatabase.com',
  user: 'sql12734420',
  password: 'wDtXAFVCnM',
  database: 'sql12734420',
});


db.connect(err => {
  if (err) {
    console.error('Database connection error: ' + err.stack);
    return;
  }
  console.log('Connected to the database');
});

export default db;

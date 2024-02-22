const mysql = require('mysql');

// const db = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: 'RahulSQL2002',
//   database: 'squadron',
// });

const db = mysql.createConnection({
  host: 'sql6.freesqldatabase.com',
  user: 'sql6686171',
  password: '1BZ4MSklss',
  database: 'sql6686171',
});


db.connect(err => {
  if (err) {
    console.error('Database connection error: ' + err.stack);
    return;
  }
  console.log('Connected to the database');
});

export default db;

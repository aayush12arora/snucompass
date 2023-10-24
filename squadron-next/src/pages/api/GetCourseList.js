import db from './db.js';

export default (req, res) => {
    //add the if req.method==get to avoid potential errors
  db.query('SELECT * FROM course', (error, results) => {
    if (error) {
      res.status(500).json({ error: 'Error fetching data' });
      return;
    }
    res.status(200).json(results);
  });
};
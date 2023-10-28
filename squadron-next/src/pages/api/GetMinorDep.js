// 

import db from './db.js';

export default async function(req, res) {
  try {
    if (req.method === 'GET') {
      const results = await new Promise((resolve, reject) => {
        db.query(`SELECT Department.dept_name,minor_description,credits 
        FROM offered_minors join Department on Department.dept_id=offered_minors.dept_id`, (error, results) => {
          if (error) {
            reject(error);
          } else {
            resolve(results);
          }
        });
      });
      
      res.status(200).json(results);
    } else {
      res.status(405).json({ error: 'Method not allowed' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error fetching data' });
  } finally {
    res.end();
  }
};

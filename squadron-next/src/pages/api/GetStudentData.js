// 

import db from './db.js';

//extracts the minor department name for a particular student from the database
export default async function(req, res) {
  try {
    if (req.method === 'GET') {
    const { rollNo } = req.query;
      const results = await new Promise((resolve, reject) => {
        db.query(`SELECT name,department.dept_id,department.dept_name from student
        JOIN department on department.dept_id=student.minor_dept_id
        WHERE student.roll_no=${rollNo}
        `, (error, results) => {
          if (error) {
            reject(error);
          } else {
            resolve(results);
          }
        });
      });
      console.log(results)
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

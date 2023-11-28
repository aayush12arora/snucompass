import db from './db.js';
import middleware from '@/cors.js';
//add dept_id to select query to fetch stuff later
export default async function(req, res) { 
  try {
    await middleware(req, res); // Add this line to enable CORS
    if (req.method === 'GET') {
      const results = await new Promise((resolve, reject) => {
        db.query(`SELECT department.dept_id,department.dept_name,minor_description,credits 
        FROM offered_minors join department on department.dept_id=offered_minors.dept_id`, (error, results) => {
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

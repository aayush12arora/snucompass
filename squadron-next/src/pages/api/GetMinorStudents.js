//endpoint to fetch data into teacher dashboard

// 

import db from './db.js';

export default async function(req, res) {
  try {
    const{fac_email}=req.query;
    const email=fac_email+"@snu.edu.in";
    console.log(email)
    if (req.method === 'GET') {
      const results = await new Promise((resolve, reject) => {
        db.query(`select faculty_name,faculty.dept_id,roll_no,name 
        from faculty join student on faculty.dept_id=student.minor_dept_id 
        where faculty.dept_id=(select dept_id from faculty 
            where faculty_email="${email}");`, (error, results) => {
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

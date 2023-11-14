// 

import db from './db.js';

export default async function(req, res) {
  try {
    if (req.method === 'GET') {
        const {dept}=req.query;
      const results = await new Promise((resolve, reject) => {
        db.query(`select course.course_id,course.course_name,course.course_credits from course 
        join minor_course_map on minor_course_map.dept_id=course.dept_id where course.dept_id=${dept}
        and course.course_id=minor_course_map.course_id`, (error, results) => {
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

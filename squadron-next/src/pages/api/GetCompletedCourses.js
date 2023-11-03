// 

import db from './db.js';
import middleware from '@/cors.js';

//extracts the minor department name for a particular student from the database
export default async function(req, res) {
  await middleware(req, res);
  try {
    if (req.method === 'GET') {
    const { rollNo,minorDep} = req.query;
      const results = await new Promise((resolve, reject) => {
        db.query(`select course.course_id,course_name,semester from Student_Completed_Course
        join course on course.course_id=Student_Completed_Course.course_id
        join student on student.roll_no=Student_Completed_Course.roll_no
         where student.roll_no=${rollNo} and left(course.course_id,3)=${minorDep};
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

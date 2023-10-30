import db from './db.js';
import middleware from '@/cors.js';

//get id and course_name only as of now
export default async function(req, res) {
  try {
    await middleware(req, res);
    if (req.method === 'GET') {
    const { dept, rollNo } = req.query;
    console.log(dept)
    console.log(rollNo)
      const results = await new Promise((resolve, reject) => {
        db.query(`select t1.course_id,course.course_name from course 
        Join (select course_id from Student_Course_Map where left(course_id,3)=${dept} and roll_no=${rollNo}) as t1 
        on course.course_id=t1.course_id;`, (error, results) => {
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

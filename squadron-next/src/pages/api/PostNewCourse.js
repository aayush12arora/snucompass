import connection from './db.js';
import middleware from '@/cors.js';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    await middleware(req, res);
    try {
      const {
        course_id,
        course_name,
        course_desc,
        course_credits,
        course_medium,
        dept_id,
        semester,
        UWE,
        Me,
      } = req.body;

      // Your SQL query
      const query = `
        CALL insertNewMinorCourse(
          '${course_id}',
          '${course_name}',
          '${course_desc}',
          ${course_credits},
          '${course_medium}',
          '${dept_id}',
          '${semester}',
          ${UWE},
          ${Me}
        );
      `;

      const results = await new Promise((resolve, reject) => {
        connection.query(query, (error, results) => {
          if (error) {
            reject(error);
          } else {
            resolve(results);
          }
        });
      });

      res.status(200).json({ message: 'inserted successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Error' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}

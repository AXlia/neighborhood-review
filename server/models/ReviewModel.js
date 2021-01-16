const db = require('../../database');

const getReviews = (search, callback) => {
  const q = `SELECT * FROM reviews
             WHERE name LIKE '%${search || ''}%'`;

  db.query(q, callback)
}

module.exports = {
  getReviews
};
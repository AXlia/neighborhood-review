const ReviewModel = require('../models/ReviewModel.js');

const getReviews = (req, res) => {
  const { search } = req.query;

  ReviewModel.getReviews(search, (err, reviews) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).send(reviews);
    }
  })
}


module.exports = {
 getReviews
}
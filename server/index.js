const express = require('express');
const app = express();
var bodyParser = require('body-parser')
const ReviewController = require('./controllers/ReviewController.js');
const path = require('path');
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// app.use('/', express.static(path.join(__dirname, '../client/dist')))

app.get('/reviews', ReviewController.getReviews);


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
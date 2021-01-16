DROP DATABASE IF EXISTS reviews;

CREATE DATABASE reviews;

USE reviews;

CREATE TABLE users (
  _id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(50),
  date_visited VARCHAR(50),
  review VARCHAR(250),
  likes INT
);

INSERT INTO users (name, date_visited, review, likes) VALUES ("Victor A.", "Tue Mar 24 2015 17:00:00 GMT-0700", "I love it here. Less children the better. A playground for singles and young couples with NO children. Great place to be able to entertain at your home with out fear of neighbors complaining", 6);

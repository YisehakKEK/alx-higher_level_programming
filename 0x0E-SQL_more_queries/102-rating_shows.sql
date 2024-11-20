-- Script to list all shows by their rating sum in descending order
SELECT tv_shows.title, SUM(ratings.rating) AS rating
FROM tv_shows
JOIN ratings ON tv_shows.id = ratings.show_id
GROUP BY tv_shows.title
ORDER BY rating DESC;

-- Script to list all genres by their rating sum in descending order
SELECT genres.name, SUM(ratings.rating) AS rating
FROM genres
JOIN tv_show_genres ON genres.id = tv_show_genres.genre_id
JOIN ratings ON tv_show_genres.show_id = ratings.show_id
GROUP BY genres.name
ORDER BY rating DESC;

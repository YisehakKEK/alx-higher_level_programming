-- Script to list all genres not linked to the show Dexter
SELECT genres.name
FROM genres
WHERE genres.id NOT IN (
    SELECT tv_show_genres.genre_id
    FROM tv_show_genres
    WHERE tv_show_genres.show_id = (SELECT id FROM tv_shows WHERE title = 'Dexter')
)
ORDER BY genres.name ASC;

INSERT INTO artist (name)
VALUES ('Bruno Mars'),
('Kim Kardashian'),
('Hannah Montana');

SELECT * FROM artist

SELECT * FROM artist WHERE artist_id < 11 
ORDER BY name DESC;

SELECT * FROM artist
ORDER BY name
LIMIT 5;

SELECT * FROM artist 
WHERE name LIKE 'Black%';

SELECT * FROM artist 
WHERE name LIKE '%Black%';
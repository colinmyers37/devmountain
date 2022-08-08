1. CREATE TABLE person(
  id SERIAL PRIMARY KEY,
  name VARCHAR(25),
  age INTEGER,
  height FLOAT
  );

2.    INSERT INTO person (name, age, height)
   VALUES ('Colin', 21, 94),
  ('Kelvin', 28, 70),
  ('Brandon', 25, 75),
  ('Tate', 30, 70),
  ('Lucas', 25, 73);

3. SELECT * FROM person ORDER BY height DESC;

4. SELECT * FROM person ORDER BY height;

5. SELECT * FROM person ORDER BY age DESC;

6. SELECT * FROM person WHERE age > 20;

7. SELECT * FROM person WHERE age = 18;

8. SELECT * FROM person WHERE age < 20 OR age > 30;

9. SELECT * FROM person WHERE age <> 27;

10. SELECT * FROM person WHERE color <> 'Red';

11. SELECT * FROM person WHERE color <> 'Red' AND color <> 'Blue';

12. SELECT * FROM person WHERE color = 'Orange' OR color = 'Green';

13. SELECT * FROM person WHERE color IN ('Orange','Green', 'Blue');

14. SELECT * FROM person WHERE color IN ('Purple', 'Yellow');
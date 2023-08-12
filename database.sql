-- create a database titled: 'react_gallery'

-- cut and paste the below code to generate the images table:
CREATE TABLE images (
    "id" SERIAL PRIMARY KEY,
    "path" VARCHAR(200) NOT NULL,
    "description" VARCHAR(200) NOT NULL,
    "likes" INTEGER
);

-- cut and paste the below code to populate your table with sample rows:
INSERT INTO "images" ("path", "description", "likes") 
VALUES
	('images/goat_small.jpg', 'Photo of a goat taken at Glacier National Park.', 0);
-- create a database titled: 'react_gallery'

-- cut and paste the below code to generate the images table:

CREATE TABLE images (
    "id" SERIAL PRIMARY KEY,
    "path" VARCHAR(200) NOT NULL,
    "description" VARCHAR(200) NOT NULL,
    "likes" INT DEFAULT 0
);

INSERT INTO "images" ("path", "description") 
VALUES
	('images/Angharad1.jpg', 'Line drawing of person in taknk top in front of amorphous shapes.');
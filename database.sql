-- create a database titled: 'react_gallery'

-- cut and paste the below code to generate the images table:
CREATE TABLE images (
    "id" SERIAL PRIMARY KEY,
    "title" VARCHAR (50),
    "path" VARCHAR(200) NOT NULL,
    "description" VARCHAR(200) NOT NULL,
    "likes" INT DEFAULT 0
);
-- cut and paste below to populate your table with a few sample images
INSERT INTO "images" ("title", "path", "description") 
VALUES
	('Angharad Drawing', 'images/Angharad1.jpg', 'Line drawing of person in taknk top in front of amorphous shapes.'),
	('Kneeling Angharad Drawing', 'images/AngharadKneel1.JPG', 'Line drawing of a person, Angharad, on her knees, in profile. Around her are a field of shapes.'),
	('People Clump Drawing', 'images/Butts1.JPG', 'Line drawing of a cluster of people, close to each other and low to the ground in an environment of shapes.'),
	('Comfort:Discomfort Dance', 'images/Comfort:Discomfort1.JPG', 'Line drawing of a group of three people, one looking off to the left, one with their arm outstretched and two fingers raised, and the third hunched over with splayed fingers.');

    -- more images to add into the database through the add image feature of the app 
    -- can be found in the public/images folder
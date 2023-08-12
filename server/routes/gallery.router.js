const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');
const galleryItems = require('../modules/gallery.data');

// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route
router.put('/like/:id', (req, res) => {
    console.log('req.params.id in put: ', req.params.id);
    let imageId = req.params.id;
    let sqlText = `UPDATE images SET likes=likes + 1 WHERE id=$1;`


    pool.query(sqlText, [imageId])
        .then((result) => {
            res.sendStatus(200)
        })
        .catch((error) => {
            console.log(`Error making database query ${sqlText}`, error);
            res.sendStatus(500)
        })
}); // END PUT Route

// GET Route
router.get('/', (req, res) => {
    const sqlText = `SELECT * FROM images;`

    pool.query(sqlText)
        .then((result) => {
            res.send(result.rows);
        })
        .catch((error) => {
            console.log(`Error making database query ${sqlText}`, error);
            res.sendStatus(500);
        });

}); // END GET Route

module.exports = router;
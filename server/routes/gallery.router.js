const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// GET Route
router
    .get('/', (req, res) => {
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

// POST Route
router
    .post('/', (req, res) => {
        const [path, description] = [req.body.path, req.body.description];
        const sqlText = `INSERT INTO images ("path", "description") VALUES ($1, $2);`
        
        pool
        .query(sqlText, [path, description])
        .then((result) => {
            res.sendStatus(201);
        })
        .catch((error) => {
            res.sendStatus(500);
        })
    }); // END POST Route

// PUT Route
router
    .put('/like/:id', (req, res) => {
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

module.exports = router;
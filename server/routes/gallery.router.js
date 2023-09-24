const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// GET Route
router
    .get('/', (req, res) => {
        const sqlText = `SELECT * FROM images ORDER BY id DESC;`

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
        const [title, path, description] = [req.body.title, req.body.path, req.body.description];
        const sqlText = `INSERT INTO images ("title", "path", "description") VALUES ($1, $2, $3);`

        pool
            .query(sqlText, [title, path, description])
            .then((result) => {
                res.sendStatus(201);
            })
            .catch((error) => {
                res.sendStatus(500);
            })
    }); // END POST Route

    router
    .post('/webcam', (req, res) => {
        console.log('body in route', req.body)
        const url = req.body.url;
        const sqlText = `INSERT INTO images ("path") VALUES ($1);`

        pool
            .query(sqlText, [url])
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

// DELETE Route
router
    .delete('/delete/:id', (req, res) => {
        console.log('req.params.id in delete: ', req.params.id);
        let imageId = req.params.id;
        let sqlText = `DELETE FROM images WHERE id=$1;`

        pool.query(sqlText, [imageId])
            .then((result) => {
                res.sendStatus(200)
            })
            .catch((error) => {
                console.log(`Error making database query ${sqlText}`, error);
                res.sendStatus(500)
            })
    }); // END DELETE Route

module.exports = router;
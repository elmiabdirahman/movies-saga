const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

router.get('/', (req, res)=>{
    const queryMovies = 'SELECT id, title, poster, description FROM "movies";';
    pool.query(queryMovies).then(( results ) =>{
        res.send(results.rows);
    }).catch( (error) =>{
        console.log('Error completing SELECT movies quert ', error);
        res.sendStatus(500);
    })
});

module.exports = router
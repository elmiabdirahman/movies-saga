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

router.get('/:id', (req, res) =>{
    const queryGenre = `SELECT "movies".id, "movies".title, 
                        "movies".poster, "movies".description, 
                        string_agg("genres".name, ', ') AS genre_list FROM "movies"
                        JOIN "movies_genres"
                        ON "movies".id = "movies_genres".movies_id
                        JOIN "genres"
                        ON "genres".id = "movies_genres".genres_id		
                        WHERE "movies".id = $1
                        GROUP BY 1;`;
                      
    pool.query(queryGenre, [req.params.id]).then(( results ) =>{
        res.send(results.rows);
    }).catch( (error) =>{
        console.log('Error completing SELECT movies quert ', error);
        res.sendStatus(500);
    })
})

module.exports = router
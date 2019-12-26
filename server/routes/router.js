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

router.put('/', (req, res) => {
    const updatedMovie = req.body;
    console.log(updatedMovie);
    const queryText = `UPDATE "movies" SET "title" = $1, "description" = $2 WHERE "movies".id=$3;`;
    const queryValues = [ updatedMovie.title, updatedMovie.description, updatedMovie.id, ];
    pool.query(queryText, queryValues).then(() => { 
        res.sendStatus(200); 
    }).catch((error) => {
        console.log('Error completing movies query', error);
        res.sendStatus(500);
      });
  });

module.exports = router
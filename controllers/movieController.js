const connection = require("../data/db") // importo il database

const index = (req , res) =>{

  //creo la query
  const sql = "SELECT * FROM movies "

  //creo la connessione 
  connection.query( sql , (err, result) =>{
    if(err) return res.status(500).json({error:"errore durante l'esecuzione della query"})
      res.json(result)
  })


};

const show = (req, res) => {
  const { id } = req.params;

  const sqlMovie = "SELECT * FROM movies WHERE id = ?";
  const sqlReviews = "SELECT * FROM reviews WHERE id = ?"; // 

  // prima query per il film
  connection.query(sqlMovie, [id], (err, movieResult) => {
    if (err) return res.status(500).json({ error: "Errore durante l'esecuzione della query film", details: err });
    if (movieResult.length === 0) return res.status(404).json({ error: "Film non trovato" });

    const movie = movieResult[0];
    movie.image = req.imagePath + movie.image

    // seconda query per le recensioni, dentro la callback della prima
    connection.query(sqlReviews, [id], (err, reviewsResult) => {
      if (err) return res.status(500).json({ error: "Errore durante l'esecuzione della query recensioni", details: err });

      const movieWithReviews = {
        
        ...movie,
        reviews: reviewsResult
      
      }
      // restituisco entrambe le informazioni
      res.json(movieWithReviews);
    });
  });
};


module.exports = {index,  show}



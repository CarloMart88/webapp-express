const connection = require("./data/db") // importo il database

const index = (req , res) =>{

  //creo la query
  const sql = "SELECT * FROM movies "

  //creo la connessione 
  connection.query( sql , (err, result) =>{
    if(err) return res.status(500).json({error:"errore durante l'esecuzione della query"})
      res.json(result)
  })


}
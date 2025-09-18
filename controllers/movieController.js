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

const show = (req , res) =>{

  const { id } = req.params
  //creo la query
  const sql = "SELECT * FROM movies WHERE id = ? "

  //creo la connessione 
  connection.query( sql ,[id], (err, result) =>{
    if(err) return res.status(500).json({error:"errore durante l'esecuzione della query"})
    if(result.length === 0 ) return res.status(404).json({ error: "Film non trovato" })
      res.json(result[0])
  })


}


module.exports = {index,  show}



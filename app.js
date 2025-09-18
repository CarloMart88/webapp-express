const express = require("express") //importo express

// creo app tramite express
const app = express()

// definisco il numero di porta su cui deve girare l'applicazione
const port = process.env.PORT

const movieRouter = require("./routers/movieRouter")


app.use(express.static('public'))

// rotta base 

app.get("/", (req , res) =>{
  res.send("rotta base del mio server")
})

//rotte per i movies
app.use("/api/movies" , movieRouter)

// dico al server di rimanere in ascolto sulla porta 
app.listen(port, () =>{
  console.log(`Server in ascolto sulla porta ${port}`)
})


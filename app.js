const express = require("express") //importo express

// creo app tramite express
const app = express()

// definisco il numero di porta su cui deve girare l'applicazione
const port = process.env.PORT

//importo cors
const cors = require('cors')

//importo i middlewares
const notFound = require("./middleware/notFound")
const errorsHandler = require("./middleware/errorsHandler")
const imagePath = require('./middleware/imagePathMiddleware')

//importo il router
const movieRouter = require("./routers/movieRouter")

// uso cors
app.use(cors({origin: process.env.FE_APP}))

// per usare le immagini
app.use(express.static('public'))

//uso il middleware imagePath
app.use(imagePath)

// rotta base 

app.get("/", (req , res) =>{
  res.send("rotta base del mio server")
})

//rotte per i movies
app.use("/api/movies" , movieRouter)

//uso i middleware
app.use(notFound)
app.use(errorsHandler)


// dico al server di rimanere in ascolto sulla porta 
app.listen(port, () =>{
  console.log(`Server in ascolto sulla porta ${port}`)
})


const mysql = require("mysql2")

//creo la connessione 
const connection = mysql.createConnection({
  host: process.env.DB_HOST  ,
  user: process.env.DB_USER  ,
  password: process.env.DB_PASSWORD  ,
  database: process.env.DB_NAME 
})

//stabilisco la connessione al db 

connection.connect((err) =>{
  if(err) throw err;
  console.log("connected succesfully to MYSQL")
})


module.exports = connection
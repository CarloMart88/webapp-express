const express = require('express');
//importiamo router
const router = express.Router()
//importiamo il controller
const movieController = require("../controllers/movieController")

//definizione delle rotte


//index 
router.get("/" , movieController.index);

// show
router.get("/:id" , movieController.show);
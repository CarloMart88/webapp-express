const notFound = (req ,res , next) => {
  res.status(404).json({
    error: "404 page not found",
    message: "pagina non trovata"
  } )
}

module.exports = notFound
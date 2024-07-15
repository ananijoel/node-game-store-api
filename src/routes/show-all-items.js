const { Item } = require('../dataBase/sequelize')
const {Op} = require('sequelize')
  
module.exports = (app) => {
  app.get('/api/items', (req, res) => {
      Item.findAll({order: ['name']})
      .then(Items => {
        const message = 'La liste des Produits a bien été récupérée.'
        res.json({ message, data: Items })
      })
      .catch(error =>{
        const message = `La liste des Items n'a pas pu etre recuperé. Réessayez dans quelques instants.`
        res.status(500).json({message, data: error})
      })
    
  })
}
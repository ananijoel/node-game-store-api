const { Item } = require('../dataBase/sequelize')
const {Op} = require('sequelize')
  
module.exports = (app) => {
  app.get('/api/Items', (req, res) => {
    if(req.query.name){
      const name = req.query.name
      const limit = parseInt(req.query.limit) || 5
      if(name.length < 2){
        const message = `le terme de recherche dit contenir au moins 2 caracteres.`
        return res.status(400).json({message})
      }
      return Item.findAndCountAll({
        where: {
          name: {
              [Op.like]: `%${name}%`
          }
        },
        order : ['name'],
        limit :  limit
      }) 
      .then(({count, rows}) => {
        const message = `Il y a ${count} Items qui correspondent au terme recherché ${name}.`
        res.json({message,data:rows})
      })
    } else {
      Item.findAll({order: ['name']})
      .then(Items => {
        const message = 'La liste des Produits a bien été récupérée.'
        res.json({ message, data: Items })
      })
      .catch(error =>{
        const message = `La liste des Items n'a pas pu etre recuperé. Réessayez dans quelques instants.`
        res.status(500).json({message, data: error})
      })
    } 
  })
}
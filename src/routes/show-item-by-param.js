const { Item } = require('../dataBase/sequelize');
const { Op } = require('sequelize')

module.exports = (app) => {
    app.get('/api/items/category/:limit/:category', (req, res) => {
        const category = req.params.category;  // Récupère la catégorie depuis l'URL
        const limit = parseInt(req.params.limit)
        Item.findAll({ 
            where: { 
                category:{
                    [Op.or]:{
                        [Op.like]: `%${category}%`,
                    }
                } 
            },
            order: ['name'],
            limit: limit
        })
            .then(items => {
                if (items.length === 0) {
                    const message = `Aucun item trouvé pour la catégorie '${category}'.`;
                    return res.status(404).json({ message });
                }
                const message = `Des items ont bien été trouvés pour la catégorie '${category}'.`;
                res.json({ message, data: items });
            })
            .catch(error => {
                const message = `Les items n'ont pas pu être récupérés pour la catégorie '${category}'. Réessayez dans quelques instants.`;
                res.status(500).json({ message, error });
            });
    });
};

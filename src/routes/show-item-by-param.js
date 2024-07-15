const { Item } = require('../dataBase/sequelize');
const { Op } = require('sequelize');

module.exports = (app) => {
    app.get('/api/items/:field/:value/:limit', (req, res) => {
        const field = req.params.field;
        const value = isNaN(req.params.value)? req.params.value : parseFloat(req.params.value);
        const limit = parseInt(req.params.limit);
        // Validation des entrées utilisateur
        const allowedFields = ['name', 'category', 'description','quantity']; // Exemple de champs autorisés
        if (!allowedFields.includes(field)) {
            return res.status(400).json({ message: `Le champ '${field}' n'est pas autorisé.` });
        }

        Item.findAll({
            where: {
                [field]: {
                    [Op.like]: `%${value}%`
                }
            },
            order: [['name', 'ASC']], 
            limit: limit
        })
        .then(items => {
            if (items.length === 0) {
                const message = `Aucun item trouvé pour ${field}: ${value}.`;
                return res.status(404).json({ message });
            }
            const message = `Des items ont bien été trouvés pour la catégorie '${value}'.`;
            res.json({ message, data: items });
        })
        .catch(error => {
            const message = `Les items n'ont pas pu être récupérés pour la catégorie '${value}'. Réessayez dans quelques instants.`;
            res.status(500).json({ message, error });
        });
    });
};

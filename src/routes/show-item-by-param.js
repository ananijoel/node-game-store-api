const { Item } = require('../dataBase/sequelize');

module.exports = (app) => {
    app.get('/api/Item/category/:price', (req, res) => {
        Item.findAll({ where: { price: req.params.price } })
        .then(items => {
            if (items.length === 0) {
                const message = `Aucun item avec le prix demandé n'est disponible.`;
                return res.status(404).json({ message });
            }
            const message = `Des items ont bien été trouvés.`;
            res.json({ message, data: items });
        })
        .catch(error => {
            const message = `Les items n'ont pas pu être récupérés. Réessayez dans quelques instants.`;
            res.status(500).json({ message, data: error });
        });
        console.log( req.params.price )
    });
};

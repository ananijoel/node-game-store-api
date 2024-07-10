const { Item } = require('../dataBase/sequelize');

module.exports = (app) => {
    app.get('/api/Item/:id', (req, res) => {
        Item.findByPk(req.params.id)
        .then(item => {
            if (item === null) {
                const message = `L'item demandé n'est pas disponible.`;
                return res.status(404).json({ message });
            }
            const message = `Un item a bien été trouvé.`;
            res.json({ message, data: item });
        })
        .catch(error => {
            const message = `L'item n'a pas pu être récupéré. Réessayez dans quelques instants.`;
            res.status(500).json({ message, data: error });
        });
    });
};

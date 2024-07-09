const { Sequelize, DataTypes } = require("sequelize");
const ItemModel = require('../models/item')
const { faker } = require('@faker-js/faker');

const sequelize = new Sequelize('Store', 'root', '', {
    host: 'localhost',
    dialect: 'mariadb',
    dialectOptions: {
      timezone: 'Etc/GMT',
    },
    logging: false
  });

const Item = ItemModel(sequelize, DataTypes)

const initDb = () => {
    return sequelize.sync({ force: true }).then(() => {
      for(let i = 0;i<20;i++){
        Item.create({
            name: faker.commerce.productName(),
            price: parseFloat(faker.commerce.price({ min: 1000, max: 1000000000 })),
            description: faker.commerce.productDescription(),
            quantity: faker.number.int(20),
            category: faker.commerce.productAdjective(),
            matricule: faker.commerce.isbn(7),
            image: faker.commerce.price({ min: 1000, max: 1000000000 })
        })
      }
      console.log('La base de données a bien été initialisée !');
    });
  };
  
  module.exports = {
    initDb,Item
  }
  
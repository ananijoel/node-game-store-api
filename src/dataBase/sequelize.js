const { Sequelize, DataTypes } = require("sequelize")
const ItemModel = require('../models/item')
const Items = require('./mock-Items')
//const { faker } = require('@faker-js/faker')
let sequelize
if(process.env.NODE_ENV === 'production'){
     sequelize = new Sequelize('u63v5gahi9wsuren', 'rc6ejreecou21zyy', 'yrt38ps6ix90j1by', {
        host: 'uyu7j8yohcwo35j3.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
        dialect: 'mariadb',
        dialectOptions: {
          timezone: 'Etc/GMT',
        },
        logging: true
      })
} else {
     sequelize = new Sequelize('Store', 'root', '', {
        host: 'localhost',
        dialect: 'mariadb',
        dialectOptions: {
          timezone: 'Etc/GMT',
        },
        logging: false
      })
}


const Item = ItemModel(sequelize, DataTypes)

const initDb = () => {
    return sequelize.sync({ force: true }).then(() => {
      Items.map(item =>{
        Item.create({
            name: item.name,
            price: parseFloat(item.price),
            description: item.description,
            quantity: item.quantity,
            category: item.category,
            matricule: item.matricule,
            image: item.image
        })
      })
      console.log('La base de données a bien été initialisée !');
    });
  };
  
  module.exports = {
    initDb,Item
  }
  
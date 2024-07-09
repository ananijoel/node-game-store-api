const { Sequelize, DataTypes } = require("sequelize");

module.exports  = (Sequelize,DataTypes) =>{
    return Sequelize.define('Item',{
        id:{
            type: DataTypes.INTEGER,
            primaryKey : true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull : false,
            unique:{
                msg: 'Le nom est deja pris'
            },
            validate:{
                notNull:{msg:`le nom de l'item ne doit pas etre nulle` },
                notEmpty:{msg:`le nom de l'item ne doit pas etre vide`}
            }
        },
        price:{
            type: DataTypes.FLOAT,
            allowNull: false,
            validate:{
                notNull:{msg:`le prix de l'item ne doit pas etre nulle` },
                notEmpty:{msg:`le prix de l'item ne doit pas etre vide`}
            }    
        },
        description:{
            type:DataTypes.TEXT,
            allowNull:false,
            validate:{
                notNull:{msg:`la description de l'item ne doit pas etre nulle` },
                notEmpty:{msg:`le description de l'item ne doit pas etre vide`}
            }   
        },
        quantity:{
            type:DataTypes.INTEGER,
            allowNull:false,
            validate:{
                notNull:{msg:`le nombre d'item ne doit pas etre nulle` },
                notEmpty:{msg:`le  nombre d'item ne doit pas etre vide`}
            }   
        },
        category:{
            type:DataTypes.STRING,
            allowNull:false,
            validate:{
                notNull:{msg:`la categorie de l'item ne doit pas etre nulle` },
                notEmpty:{msg:`categorie de l'item ne doit pas etre vide`}
            }   
        },
        matricule:{
            type:DataTypes.STRING,
            allowNull:false,
            validate:{
                notNull:{msg:`le matricule de l'item ne doit pas etre nulle` },
                notEmpty:{msg:`le matricule de l'item ne doit pas etre vide`}
            } 
        },
        image:{
            type:DataTypes.STRING,
            allowNull:true
        }
    })
}
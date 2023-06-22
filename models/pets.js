const { DataTypes, Model } = require('sequelize')
const sequelize = require('../bd')
class Usuario extends Model{}
Pets.init ({
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    sexo: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    especie: {
        type: DataTypes.STRING,
        allowNull: false
    },
    raça: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    peso: {
        type: DataTypes.STRING,
        allowNull: false
    },
    tamanho: {
        type: DataTypes.STRING,
        allowNull: false
    },
    idade: {
        type: DataTypes.STRING,
        allowNull: false
    },
    doença: {
        type: DataTypes.STRING,
        allowNull: false
    },
    obs: {
        type: DataTypes.STRING,
        allowNull: false
    },
})
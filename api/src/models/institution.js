const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('institution', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true,
        },
        institutionName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        phoneNumber: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        address: {
            province: {
                type: DataTypes.STRING,
                allowNull: false
            },
            region: {
                type: DataTypes.STRING,
                allowNull: false
            },
            streetAndNumber: {
                type: DataTypes.STRING,
                allowNull: false
            },
        },
        businessActivity: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        entity: {
            type: DataTypes.ENUM(["Privado", "Público"]),
            allowNull: false,
        },
    }, { timestamps: true }); // to create createdAt/updatedAt
};
const DataTypes = require('sequelize/lib/data-types');

module.exports = function(sequelize){
    const Productos = sequelize.define('productos',
    {
        id:{
            type : DataTypes.BIGINT,
            primaryKey: true,
            unique: true,
            allowNull: false,
            onUpdate: 'CASCADE'         
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false,
            onUpdate: 'CASCADE'
        },
        descripcion:{
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: 'Ninguna',
            onUpdate: 'CASCADE'
        },
        precio_unitario:{
            type: DataTypes.FLOAT,
            allowNull: false,
            defaultValue: 0.0,
            onUpdate: 'CASCADE'
        },
        stock: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        activo: {
            type:  DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true 
        }
    },{
        timestamps: true
    });
    return Productos;
}
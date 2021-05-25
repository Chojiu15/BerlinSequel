'use-strict'


module.exports = (sequelize, DataTypes) => {
    const Car = sequelize.define('Car', {
        name : DataTypes.STRING,
        brand : DataTypes.STRING,
        color : DataTypes.STRING,
        age : DataTypes.INTEGER,
        eco : DataTypes.BOOLEAN
    }, {
        timestamps : false
    })

    Car.associate = models => {
        Car.belongsTo(models.Owner)
    }

    return Car

}
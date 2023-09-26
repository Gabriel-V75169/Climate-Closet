const User = require('./user');
const Customize = require('./customize');


User.hasOne(Customize, {
    foreignKey: 'id',
})

Customize.belongsTo(User, {
    foreignKey: 'id',
})

module.exports = { User, Customize };


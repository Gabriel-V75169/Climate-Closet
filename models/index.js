const User = require('./user');
const Customize = require('./customize');



User.hasOne(Customize, {
    foreignKey: 'user_id',
})

Customize.belongsTo(User, {
    foreignKey: 'user_id',
})

module.exports = { User, Customize };


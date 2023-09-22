const User = require('./user');
const Shopping = require('./shopping');
const Weather = require('./weather');

User.hasMany(Weather, {
  foreignKey: 'user_id',
});

Weather.belongsTo(User, {
  foreignKey: 'user_id'
});

User.hasOne(Shopping, {
    foreignKey: 'user_id',
})

Shopping.belongsTo(User, {
    foreignKey: 'user_id',
})

module.exports = { User, Shopping, Weather };


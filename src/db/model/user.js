var instance = require('../base');
var Sequelize = require('sequelize');
var BaseModel = require('./base');
var assign = require('lodash/assign');

var user = assign({
        name: Sequelize.STRING,
        gender: Sequelize.STRING,
        phone: Sequelize.STRING,
        email: Sequelize.STRING,
        status: Sequelize.STRING,
    },
    BaseModel
);

const User = instance.define('user', user, {
    timestamps: true,
    paranoid: true,
});

User.sync();
module.exports = User;
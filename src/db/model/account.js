var instance = require('../base');
var Sequelize = require('sequelize');
var BaseModel = require('./base');
var assign = require('lodash/assign');

var account = assign({}, {
        userId: Sequelize.INTEGER,
        loginId: Sequelize.TEXT,
        password: Sequelize.TEXT,
        encryptMethod: Sequelize.TEXT,
    },
    BaseModel
);

const Account = instance.define('account', account, {
    timestamps: true,
    paranoid: true,
});

Account.sync();
module.exports = Account;
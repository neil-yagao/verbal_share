var user = require('./user');
var account = require('./account')

module.exports = function() {
    return [user, account];
}
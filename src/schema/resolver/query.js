const User = require('../../db/model/user');
const Account = require('../../db/model/account');
const query = {
    Query: {
        user(_, args) {
            console.log('args', args);
            return User.findAll({ where: {...args } });
        },
        login(_, args) {
            return Account.findAll({
                where: {
                    ...args,
                },
            }).then(res => {
                if (res)
            });
        },
    },
};
module.exports = query;
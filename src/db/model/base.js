var Sequelize = require('sequelize');

module.exports = {
	id: {
		type: Sequelize.INTEGER,
		primaryKey: true,
		autoIncrement: true
	},
	attribtue:{
		type:Sequelize.STRING
	},
	isActive:{
		type:Sequelize.BOOLEAN,
		default:true
	}
};
module.exports = {
	db:{
		host:process.env.MYSQL_URL || 'localhost',
		port:'3306',
		userName:process.env.MYSQL_USER || 'propellerhead',
		password:process.env.MYSQL_PASSWORD || 'propellerhead@20190529',
		name: process.env.MYSQL_DATABASE || 'propellerhead',
		dialect:'mysql'
	},
	static:'./static'
}
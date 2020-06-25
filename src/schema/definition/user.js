const User = `
	type User {
		id:Int!
		name:String!
		phone:String
		email:String
		"""
			[Male|Female]
		"""
		gender:String
		status:String
	}

	input UserInput {
		name:String!
		phone:String
		email:String
		title:String
		status:String
	}
`;

module.exports = User;
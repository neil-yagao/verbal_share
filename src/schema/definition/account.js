const Note =
    `
	type Account {
		id:Int!
		password:String
		loginId:String
	}

	input AccountInput {
		loginId:String
		password:String
		encryptMethod:String
	}
`
module.exports = Note
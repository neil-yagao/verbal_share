const Mutations = `
	type Mutations {
		    register(account:AccountInput):User
			addUser(user:UserInput): User
			addNoteToUser(userId:Int, note:NoteInput):Note
			updateUser(userId:Int, user:UserInput):User
    }
`;

/**
 * createNewGame(courseId:Int!, game:GameInput!):Game
 * joinGame(playerId:Int!, gameId:int!):Game
 */

module.exports = Mutations;
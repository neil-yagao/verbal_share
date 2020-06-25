const RootQuery = `
  type Query {
    user(id:Int):[User]
    login(loginId:String,password:String):User
  }
`;

module.exports = RootQuery;
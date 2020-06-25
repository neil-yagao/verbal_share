const { ApolloServer} = require('apollo-server-express');
var express = require('express')
var bodyParser = require('body-parser');
var config = require('./conf/app')
var schema = require( "./src/schema");

const server = new ApolloServer({
	schema:schema
});

var app = express();

// This `listen` method launches a web-server.  Existing apps
// can utilize middleware options, which we'll discuss later.
server.applyMiddleware({ app });

global.defaultSuccess = {
	success: true,
	msg: ''
};
// omit due to
/*app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');*/
// app.use(express.static(path.join(__dirname, 'public')));
// app.use(express.json());
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

app.use(bodyParser.json());
app.use(
	bodyParser.urlencoded({
		extended: false
	})
);
app.use('/',express.static(config.static));
// catch 404 and forward to error handler
app.use(function(req, res, next) {
	var err = new Error('Not Found');
	err.status = 404;
	next(err);
});

// error handler
app.use(function(err, req, res, next) {
	//direct return error message
	res.status(err.status || 500);
	console.log('err', err);
	res.json({
		success: false,
		msg: err.message
	});
});

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`),
);

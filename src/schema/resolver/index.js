const { merge } = require('lodash');

const Customer = require('./customer');
const Mutation = require('./mutation');
const Query = require('./query');

module.exports = merge(Customer,Mutation,Query)
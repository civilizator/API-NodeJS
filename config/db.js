
const data = require('./../password');

module.exports = {
  url: `mongodb+srv://${data.name}:${data.password}@cluster0-nn4i1.mongodb.net/test?retryWrites=true&w=majority`
};

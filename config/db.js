
const data = require('./../password');

module.exports = {
  url: `mongodb+srv://stan:${data.password}@cluster0-nn4i1.mongodb.net/test?retryWrites=true&w=majority`
};

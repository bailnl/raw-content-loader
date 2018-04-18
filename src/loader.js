const fs = require('fs')

module.exports = function rawContentLoader() {
  const source = fs.readFileSync(this.resourcePath, "utf-8").toString();


  const json = JSON.stringify(source)
    .replace(/\u2028/g, '\\u2028')
    .replace(/\u2029/g, '\\u2029');

  return `module.exports = ${json}`;
};
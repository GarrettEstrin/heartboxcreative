var fs = require('fs');

var date = fs.statSync('deploy.js');
console.log(date.mtime);
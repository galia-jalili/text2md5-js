var fs = require('fs');
var crypto = require('crypto');
var file = fs.readFileSync('file1.txt', 'utf8');
var lines = file.split('\n');
for (var i = 0; i < lines.length; i++) {
  var hash = crypto.createHash('md5').update(lines[i]).digest('hex');
  fs.appendFileSync('file2.txt', hash + '\n');
}

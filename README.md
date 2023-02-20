# read file1.txt for input  and md5() them and save to a file2.txt with js

app.js
```
var fs = require('fs');
var crypto = require('crypto');
var file = fs.readFileSync('file1.txt', 'utf8');
var lines = file.split('\n');
for (var i = 0; i < lines.length; i++) {
  var hash = crypto.createHash('md5').update(lines[i]).digest('hex');
  fs.appendFileSync('file2.txt', hash + '\n');
}
```

**run with:** 
`node app.js`


**if error happen:**

```
sudo apt-get install nodejs-legacy
sudo apt-get install npm
npm install md5
```

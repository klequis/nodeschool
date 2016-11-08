var fs = require("fs");
// read a file: fs.readFileSync('/path/to/file')
// file:///home/user01/.nvm/versions/node/v6.9.1/lib/node_modules/learnyounode/node_apidoc/fs.html
// convert buffer to string: var str = buf.toString()
// doc on bufferers
// file:///home/user01/.nvm/versions/node/v6.9.1/lib/node_modules/learnyounode/node_apidoc/fs.html
let buf = fs.readFileSync(process.argv[2]);
let str = buf.toString();
let arr = str.split("\n");
console.log(arr.length - 1);

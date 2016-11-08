// command line will have 2 args, pathToFile & fileType
// print one file per line means loop with console.log
// use fs.readdir() which returns a list of file names as array of strings
// use node's "path" module with th e extname function
let fs = require("fs");
const path = require("path");
let dirPath = process.argv[2];
let extension = "." + process.argv[3];
let fileName;
fs.readdir(dirPath, "utf8", (err, data) => {
  if (err) throw err;
  for (let i=0; i<data.length; i++) {
    fileName = data[i];
    if (path.extname(fileName) == extension) {
      console.log(fileName);
    }
  }
});

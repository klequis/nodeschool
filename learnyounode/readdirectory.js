
let fs = require("fs");
const path = require("path");
let fileName;

module.exports = function(dirPath, ext, callback) {
  fs.readdir(dirPath, "utf8", (err, data) => {
    if (err) return callback(err, null);
    // pack data
    ext = "." + ext;
    let arr = [];
    for (let i=0; i<data.length; i++) {
      fileName = data[i];
      if (path.extname(fileName) == ext) {
        arr.push(fileName);
      }
    }
    return callback(null, arr);
  });
};

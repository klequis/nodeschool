/* Module
 * > does the fitering
 * > args: dirName, ext, callback
 * >> Dont appen '.' to the extension
 */
 // use node(err data) format
 // printing is to be done from the calling module
 // If error, print a message
                      // read.directory.js
let readDir = require("./readdirectory.js");
let dirPath = process.argv[2];
let extension = process.argv[3];

readDir(dirPath, extension, listData);

function listData(err, data) {
  if (err) {
    console.log(err.message);
  } else {
    for (let i=0; i<data.length; i++) {
      console.log(data[i]);
    }
  }

}

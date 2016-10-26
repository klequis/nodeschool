var fs = require("fs");

// art of callbacks: https://github.com/maxogden/art-of-node#callbacks
fs.readFile(process.argv[2], "Utf8", (err, data) => {
  if (err) throw err;
  console.log(data.split("\n").length-1);
});

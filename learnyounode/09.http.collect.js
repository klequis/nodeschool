/*
 * Performs a HTTP GET
 * Url is first CL arg
 * Collect all data
 * Write 2 lines to the console
 * > integer representing the number of characters received from the server
 * > complete string received
*/
/*
printArgs();
function printArgs() {
  let args = process.argv;
  console.log(args.length);
  for (let i=0; i<args.length; i++) {
    console.log("[" + i + "]" + process.argv[i]);
  }
}
*/

/*
 * Official solution copied

var http = require("http");
var bl = require("bl");
http.get(process.argv[2], function(response) {
  response.pipe(bl(function(err, data) {
    if (err) {
      return console.error(err);
    }
    data = data.toString();
    console.log(data.length);
    console.log(data);
  }));
});
*/

/*
 * Official solution copied
 * Re-written with =>
*/
var http = require("http");
var bl = require("bl");
http.get(process.argv[2], response => {
  response.pipe(bl((err, data) => {
    if (err) {
      return console.error(err);
    }
    data = data.toString();
    console.log(data.length);
    console.log(data);
  }));
});

/*
 * This worked but was not in line with the offial solution
 *
let http = require("http");
const BufferList = require("bl");
const bl = new BufferList;
const fs = require("fs");

let callback = function(response) {
  response.setEncoding("utf8");
  response.on("data", function(chunk) {
    // console.log(chunk);
    // str += chunk;
    bl.append(new Buffer(chunk));
  });

  response.on("end", function() {
    // console.log(str);
    console.log(bl.length);
    console.log(bl.toString());
  });

};
let url = process.argv[2];
http.get(url, callback);
*/

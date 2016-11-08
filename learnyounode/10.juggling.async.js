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

/* solutions
 * wait()
*/

var http = require("http");
var bl = require("bl");
var buffersMap = new Map();
var callback = http.get(url, response => {
  response.pipe(bl((err, data) => {
    if (err) {
      return console.error(err);
    }
    data = data.toString();
    console.log(data.length);
    console.log(data);
  }));
});
var url1 = process.argv[2];
var url2 = process.argv[3];
var url3 = process.argv[4];

function callThem()

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

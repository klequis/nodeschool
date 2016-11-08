/*
 * Performs a HTTP GET
 * Url is first CL arg
 * Use:
 * > http core module
 * > http.get() shortcut
 * > > args
 * > > > 1) url
 * > > > 1) callback
 * > > signature of callback is:  function callback (response) { ... }
 *
 * Response
 * > Is a Node Stream object
 * > Treat it like obj that emits events. Of interest
 * > > 1) data - chunck of data
 * > > 2) error
 * > > 3) end
 * > Use arg
 * > > setEncoding() with "utf8"
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

var http = require("http");

let callback = function(response) {
  var str = "";
  response.setEncoding("utf8");
  response.on("data", function(chunk) {
    console.log(chunk);
  });
  /*
  response.on("end", function() {
    console.log(str);
  });
  */
};

let url = process.argv[2];
http.get(url, callback);

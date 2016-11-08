/*
 * Listen to TCP connections on port given in first argument
 * For each connection write the current date & 24 hour time as
 * > YYYY-MM-DD hh:mm
 * > Followed by a new line character
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
const net = require("net");
const port = Number(process.argv[2]);

function zeroFill(i) {
  return (i < 10 ? "0" : "") + i;
}

function getFormatedDate() {
  var ret;
  var d = new Date();
  ret = d.getFullYear() + "-"
    + zeroFill(d.getMonth() + 1) + "-"
    + zeroFill(d.getDate()) + " "
    + zeroFill(d.getHours()) + ":"
    + zeroFill(d.getMinutes());
  return ret;
}

var server = net.createServer(function(socket) {

  socket.write(getFormatedDate() + "\n");
  socket.end();
  // The below is equilivent to the 2 previous lines together
  // socket.end(now() + "\n");
});
server.listen(port);

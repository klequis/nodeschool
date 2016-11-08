const net = require("net");
const port = process.argv[2];
console.log("port=" + port);

let server = net.createServer(function(socket) {
  // handel socket here
  socket.end(now() + '\n');
  socket.end(now() + '\n');
});
server.listen(port);

const client = net.connect({port: port}, () => {
  // 'connect listener'
  console.log("connected to the server!");
  client.write("world!\r\n");
});
client.on("data", (data) => {
  console.log(data.toString());
  client.end();
});
client.end("end", () => {
  console.log("disconnected from the server");
});
client.on("error", (err) => {
  console.log("error=" + err.toString());
});

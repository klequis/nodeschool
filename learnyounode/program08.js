
var http = require("http");
var bl = require("bl");
var count = 0;
var results = [];

/*
printArgs();
function printArgs() {
  let args = process.argv;
  console.log(args.length);
  for (let i=0; i<args.length; i++) {
    console.log("args[" + i + "]" + process.argv[i]);
  }
}
*/

for (var i=0; i<=2; i++) {
  httpGet(i);
}

function printResults() {
  for (var i=0; i<3; i++) {
    console.log(results[i]);
  }
}

function httpGet(index) {
  http.get(process.argv[2 + index], response => {
    response.pipe(bl((err, data) => {
      if (err) {
        return console.error(err);
      }
      results[index] = data.toString();
      count++;
      if (count == 3) {
        printResults();
      }
    }));
  });
}

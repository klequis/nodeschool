// DOES NOT WORK
function MyObject(name, message) {
  this.name = name.toString();
  this.message = message.toString();
}
(function() {
  this.getName = function() {
    return this.name;
  };
  this.getMessage = function() {
    return this.message;
  };
}).call(MyObject.prototype);

var obj = MyObject("karl", "ecker");
alert(obj.name);
alert(obj.message);

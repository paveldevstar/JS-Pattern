function PrototypeCustomer (proto) {
  this.proto = proto
  this.clone = function () {
    var customer = new Customer()
    customer.first = this.proto.first
    customer.last = this.proto.last
    customer.name = this.proto.name
    return customer
  }
}

function Customer (first, last, name) {
  this.first = first
  this.last = last
  this.name = name
  this.say = function () {
    console.log(this.first, this.last, this.name)
  }
}

(function () {
  var proto = new Customer('n/a', 'n/a', 'pending')
  var prototype = new PrototypeCustomer(proto)
  proto.say()
  prototype.clone().say()
})()

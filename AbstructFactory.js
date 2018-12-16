var log = (function () {
  var log = ''
  return {
    add: function (msg) {
      log += msg + '\n'
    },
    show: function () {
      console.log(log)
    }
  }
})()

function Employee (name) {
  this.name = name
  this.say = function () {
    log.add('My name is ' + name)
  }
}

function EmployeeFactory () {
  this.create = function (name) {
    return new Employee(name)
  }
}

function Vendor (name) {
  this.name = name
  this.say = function () {
    log.add('My name is ' + name)
  }
}
function VendorFactory () {
  this.create = function (name) {
    return new Vendor(name)
  }
}

(function () {
  var employeeFactory = new EmployeeFactory()
  var vendorFactory = new VendorFactory()
  var p = []
  p.push(employeeFactory.create('Bader 1'))
  p.push(vendorFactory.create('Vendor 1'))
  p.push(employeeFactory.create('Bader 2'))
  p.push(vendorFactory.create('Vendor 2'))
  for (var i = 0; i < p.length; i++) {
    p[i].say()
  }
  log.show()
})()

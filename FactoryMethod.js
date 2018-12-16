var log = (function () {
  var log = ''
  return {
    add: function (msg) {
      log += msg + '\n'
    },
    display: function () {
      console.log(log)
    }
  }
})()

var FullTime = function () {
  this.hourly = '30$'
}

var PartTime = function () {
  this.hourly = '50$'
}

var Factory = function () {
  this.create = function (name) {
    var employee
    if (name === 'fulltime') {
      employee = new FullTime()
    } else if (name === 'hourly') {
      employee = new PartTime()
    }
    employee.type = name
    employee.say = function () {
      log.add(this.type + ' say ' + this.hourly + ' rate')
    }
    return employee
  }
}

;(function () {
  var employees = []
  var factory = new Factory()
  employees.push(factory.create('fulltime'))
  employees.push(factory.create('hourly'))
  for (var i = 0; i < employees.length; i++) {
    employees[i].say()
  }
  log.display()
})()

function FlightWeight (make, model, processor) {
  this.make = make
  this.model = model
  this.processor = processor
}

var flightWeightFactory = (function () {
  var flightweight = {}
  return {
    get: function (make, model, processor) {
      if (!flightweight[make + model]) {
        flightweight[make + model] = new FlightWeight(make, model, processor)
      }
    },
    getCount: function () {
      var count = 0
      for (var f in flightweight) count++
      return count
    }
  }
})()

function Computer (make, model, processor, memory, tag) {
  this.flightweight = flightWeightFactory.get(make, model, processor)
  this.memory = memory
  this.tag = tag
  this.getMake = function () {
    return this.flightweight.make
  }
}

var ComputerCollection = function () {
  var computers = {}
  var count = 0
  return {
    add: function (make, model, processor, memory, tag) {
      computers[tag] = new Computer(make, model, processor, memory, tag)
      count++
    },
    get: function (tag) {
      return computers[tag]
    },
    getCount: function () {
      return count
    }
  }
}

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
}())

;
(function () {
  var computers = new ComputerCollection()
  computers.add('Dell', 'Studio XPS', 'Intel', '5G', 'Y755P')
  computers.add('Dell', 'Studio XPS', 'Intel', '6G', 'X997T')
  computers.add('Dell', 'Studio XPS', 'Intel', '2G', 'U8U80')
  computers.add('Dell', 'Studio XPS', 'Intel', '2G', 'NT777')
  computers.add('Dell', 'Studio XPS', 'Intel', '2G', '0J88A')
  computers.add('HP', 'Envy', 'Intel', '4G', 'CNU883701')
  computers.add('HP', 'Envy', 'Intel', '2G', 'TXU003283')

  log.add('Computers: ' + computers.getCount())
  log.add('Flyweights: ' + flightWeightFactory.getCount())
  log.show()
})()

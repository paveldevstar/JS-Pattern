var log = (function () {
  var log = ''
  return {
    add: function (msg) { log += msg + '\n' },
    show: function () { console.log(log); log = '' }
  }
})()
function Shop () {
  this.construct = function (builder) {
    builder.step1()
    builder.step2()
    return builder.step3()
  }
}

function CarBuilder () {
  this.car = null
  this.step1 = function () {
    this.car = new Car()
  }
  this.step2 = function () {
    this.car.addParts()
  }
  this.step3 = function () {
    return this.car
  }
}

function BusBuilder () {
  this.bus = null
  this.step1 = function () {
    this.bus = new Bus()
  }
  this.step2 = function () {
    this.bus.addParts()
  }
  this.step3 = function () {
    return this.bus
  }
}

function Car () {
  this.parts = 0
  this.addParts = function () {
    this.parts = 1
    log.add('Car Part ' + this.parts)
  }
}

function Bus () {
  this.parts = 0
  this.addParts = function () {
    this.parts = 1
    log.add('Bus Part ' + this.parts)
  }
}

(function () {
  var shop = new Shop()
  var carBuilder = new CarBuilder()
  var busBuilder = new BusBuilder()
  let tracks = []
  tracks.push(shop.construct(carBuilder))
  tracks.push(shop.construct(busBuilder))
  log.show()
})()

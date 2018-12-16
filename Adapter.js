function Shipping () {
  this.request = function (zipStart, zipFinish, weight) {
    return '45$'
  }
}

function AdvancedShipping () {
  this.login = function () {

  }
  this.setStart = function () {

  }
  this.setDestination = function () {

  }
  this.calculate = function () {
    return '39$'
  }
}

function Adapter (credentials) {
  var shipping = new AdvancedShipping()
  shipping.login()
  return {
    request: function (zipStrt, zipFinish, weight) {
      return shipping.calculate()
    }
  }
}

(function run () {
  var v = new Shipping().request()
  console.log(v)
  var adapter = new Adapter({ token: '12345' })
  v = adapter.request()
  console.log(v)
})()

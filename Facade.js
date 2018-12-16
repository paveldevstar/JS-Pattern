var Mortgage = function (name) {
  this.name = name
  this.applyFor = function () {
    var result = 'approved'
    if (!new Bank().verify()) {
      result = 'denied'
    } else if (!new Credit().get(this.name)) {
      result = 'denied'
    }
    return result
  }
}

var Bank = function () {
  this.verify = function () {
    return true
  }
}

var Credit = function () {
  this.get = function (name) {
    return true
  }
};

(function () {
  var mortgage = new Mortgage()
  var result = mortgage.applyFor()
  console.log(result)
})()

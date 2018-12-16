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

var User = function (name) {
  this.name = name
  this.say = function () {
    log.add(this.name)
  }
}

var DecorateUser = function (user, street, city) {
  this.user = user
  this.name = user.name
  this.street = street
  this.city = city
  this.say = function () {
    log.add('Decorated User:  ' + this.name + this.street + this.city)
  }
};

(function run () {
  var user = new User('Bader')
  user.say()
  var decorUser = new DecorateUser(user, 'Riyadh', 'Riyadh')
  decorUser.say()
  log.show()
})()

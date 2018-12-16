var Singleton = (function () {
  var instance
  function createInstance () {
    var object = {}
    return object
  }
  return {
    getInstance: function () {
      if (!instance) {
        instance = createInstance()
      }
      return instance
    }
  }
})();

(function run () {
  var instance1 = Singleton.getInstance()
  var instance2 = Singleton.getInstance()
  console.log(instance1 === instance2)
})()

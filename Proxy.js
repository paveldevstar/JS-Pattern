function GeoCoder () {
  this.getLatLog = function (address) {
    if (address === 'Amsterdam') {
      return '52.3700° N, 4.8900° E'
    } else if (address === 'London') {
      return '51.5171° N, 0.1062° W'
    } else if (address === 'Paris') {
      return '48.8742° N, 2.3470° E'
    } else if (address === 'Berlin') {
      return '52.5233° N, 13.4127° E'
    } else {
      return ''
    }
  }
}

function GeoProxy () {
  var geoCoder = new GeoCoder()
  var geoCache = {}
  return {
    getLatLng: function (address) {
      if (!geoCache[address]) {
        geoCache[address] = geoCoder.getLatLog(address)
      }
      log.add(address + ': ' + geoCache[address])
      return geoCache[address]
    }
  }
}

var log = (function () {
  var log = ''

  return {
    add: function (msg) { log += msg + '\n' },
    show: function () { console.log(log); log = '' }
  }
})()

;(function () {
  var geo = new GeoProxy()
  geo.getLatLng('Paris')
  geo.getLatLng('London')
  geo.getLatLng('London')
  geo.getLatLng('London')
  geo.getLatLng('London')
  geo.getLatLng('Amsterdam')
  geo.getLatLng('Amsterdam')
  geo.getLatLng('Amsterdam')
  geo.getLatLng('Amsterdam')
  geo.getLatLng('London')
  geo.getLatLng('London')
  log.show()
}())

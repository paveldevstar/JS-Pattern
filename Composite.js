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

var Node = function (name) {
  this.children = []
  this.name = name
}

Node.prototype = {
  add: function (child) {
    this.children.push(child)
  },
  remove: function (child) {
    for (var i = 0; i < this.childrent.lenth; i++) {
      if (this.children[i] === child) {
        this.childrent.splice(i, 1)
        return
      }
    }
  },
  getChild: function (i) {
    return this.children[i]
  },
  hasChild: function () {
    return this.children.length > 0
  },
  traverse: function () {
    if (!this.hasChild) return
    for (var i = 0; i < this.children.length; i++) {
      log.add(this.children[i].name)
      if (this.children[i].hasChild()) {
        this.children[i].traverse()
      }
    }
  }
};

(function run () {
  var tree = new Node('root')
  var left = new Node('left')
  var right = new Node('right')
  var leftleft = new Node('leftleft')
  var rightright = new Node('rightright')
  var leftright = new Node('leftright')
  var rightleft = new Node('rightleft')
  tree.add(left)
  tree.add(right)
  left.add(leftleft)
  left.add(leftright)
  right.add(rightright)
  right.add(rightleft)
  tree.traverse()
  log.show()
})()

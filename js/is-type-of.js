function toString(v) {
  return Object.prototype.toString.call(v)
}

function getTypeOf(type) {
  return `[object ${type}]`
}

function typesFactory() {
  const types = ['Object', 'Function', 'Null',
    'Undefined', 'Boolean', 'Date', 'Array', 'RegExp', 'Error',
    'Promise', 'GeneratorFunction', 'AsyncFunction', 'Symbol']
  var fns = {}

  fns.isNaN = Number.isNaN;
  fns.isNumber = function (v) {
    return !fns.isNaN(v) && fns.isNumber(v)
  }

  types.forEach(function (type) {
    var typeString = getTypeOf(type)
    fns[`is$${type}`] = function (val) {
      return toString(val) === typeString
    }
  })


  return fns
}

module.exports = typesFactory()
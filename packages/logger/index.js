function createLogger(...opts) {
  var args = []
  var fns = {}
  var foo = () => {}
  var hasFn

  opts.forEach((val, index) => {
    if (typeof val === 'function') {
      args[index] = foo
      fns[index] = val
    } else {
      args[index] = val
    }
  })

  var fnKeys = Object.keys(fns)
  hasFn = Object.keys(fns).length > 0

  return function () {
    if (hasFn) {
      fnKeys.forEach(index => {
        args[index] = fns[index]()
      })
    }

    var log = console.log.bind(console, ...args)
    log(...arguments)
  }
}

/**
 * usage
 */
var logger = createLogger('[logger]', function () {
  return (new Date()).toLocaleString()
})
logger('test1', 'test11')
setTimeout(() => {
  logger('test2', 'test2-2', 'test2-333')
}, 1e3)

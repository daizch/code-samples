/**
 define(obj, 'dir', function() {
      var dir = path.dirname(filepath);
      if (dir === '.') {
        return (filepath[0] === '.') ? dir : '';
      } else {
        return dir;
      }
    });
 * @param obj
 * @param prop
 * @param fn
 */
function define(obj, prop, fn) {
  var cached;
  Object.defineProperty(obj, prop, {
    configurable: true,
    enumerable: true,
    set: function (val) {
      cached = val;
    },
    get: function () {
      return cached || (cached = fn.call(obj));
    }
  });
}
/**
 * arr.flat(Infinity)
 */
function flat(arr) {
  var ans = []
  var queue = arr
  while (queue.length) {
    let item = queue.shift()
    if (Array.isArray(item)) {
      queue = item.concat(queue)
    } else {
      ans.push(item)
    }
  }
}
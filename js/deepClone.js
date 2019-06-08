
function getRegExpFlags(reg) {
  var flags = ''

  if (reg.ignoreCase) flags += 'i';
  if (reg.global) flags += 'g';
  if (reg.multiline) flags += 'm'
  return flags
}

function copyRegExp(reg) {
  var _reg = new RegExp(reg.source, getRegExpFlags(reg))
  if (reg.lastIndex) _reg.lastIndex = reg.lastIndex
  return _reg
}


function getDataType(val) {
  var valType = Object.prototype.toString.call(val).toLowerCase()
  var reg = /\[object (\w+)\]/
  var result = reg.exec(valType)
  return (result && result[1])
}

function getExpFlags(reg) {
  var flags = ''

  if (reg.global) flags += 'g'
  if (reg.ignoreCase) flags += 'i'
  if (reg.multiline) flags += 'm'
  return flags
}

function copyArray(array) {
  return array.map(item => deepClone(item))
}

function copyObject(obj) {
  var newObj = {}
  Object.keys(obj).forEach(key => {
    newObj[key] = deepClone(obj[key])
  })

  return newObj
}

function copyDate(date) {
  return new Date(date.getTime())
}

/**
 *
 var obj = deepClone({
  a: function say() {
    console.log('hello world')
  },
  c: new RegExp('ab+c', 'i'),
  d: 123,
  b: 'abcdef',
  e: [1, 2, 3, 'bbbb'],
  f: {
    a: 123,
    b: {
      aaa: 123,
      bbb: 'asdfdf'
    }
  }
})
 * @param val
 * @returns {*}
 */

function deepClone(val) {
  if (getExpFlags(val) === 'null') return null
  if (typeof val !== 'object') return val

  var cloneVal
  var type = getDataType(val)

  switch (type) {
    case 'array':
      cloneVal = copyArray(val)
      break;
    case 'object':
      cloneVal = copyObject(val)
      break;
    case 'date':
      cloneVal = copyDate(val)
      break;
    case 'regexp':
      cloneVal = copyRegExp(val)
      break
    default:
      cloneVal = val
  }
  return cloneVal
}

//https://github.com/kamranahmedse/driver.js/tree/master/src/core
function isInView(el) {
  let top = el.offsetTop;
  let left = el.offsetLeft;
  const width = el.offsetWidth;
  const height = el.offsetHeight;

  while (el.offsetParent) {
    el = el.offsetParent;
    top += el.offsetTop;
    left += el.offsetLeft;
  }

  return (
    top >= window.pageYOffset &&
    left >= window.pageXOffset &&
    (top + height) <= (window.pageYOffset + window.innerHeight) &&
    (left + width) <= (window.pageXOffset + window.innerWidth)
  )
}


var isInViewport = function ($el) {
  var rect = $el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  )
}


function isCross(r1, r2) {
  var r = {};
  r.top = Math.max(r1.top, r2.top);
  r.bottom = Math.min(r1.bottom, r2.bottom);
  r.left = Math.max(r1.left, r2.left);
  r.right = Math.min(r1.right, r2.right);
  return r.bottom >= r.top && r.right >= r.left;
}


function checkInViewport(el, container) {
  var contRect
  if (!container) {
    var width = (window.innerWidth || document.documentElement.clientWidth)
    var height = (window.innerHeight || document.documentElement.clientHeight)
    contRect = {
      top: 0,
      right: width,
      bottom: height,
      left: 0
    }
  } else {
    contRect = container.getBoundingClientRect()
  }

  return isCross(el.getBoundingClientRect(), contRect)
}

function isObject(obj) {
  return Object.prototype.toString.call(obj) === '[object Object]'
}

function isInViewport(el, container, config) {
  var offsetConfig = {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  }
  var contRect

  if (isObject(container)) {
    config = container
    container = null
  } else if (!config) {
    config = {}
  }


  Object.assign(offsetConfig, config)

  if (!container) {
    var width = (window.innerWidth || document.documentElement.clientWidth)
    var height = (window.innerHeight || document.documentElement.clientHeight)
    contRect = {
      top: 0,
      right: width,
      bottom: height,
      left: 0
    }
  } else {
    contRect = container.getBoundingClientRect()
  }

  contRect.top -= offsetConfig.top
  contRect.right += offsetConfig.right
  contRect.bottom += offsetConfig.bottom
  contRect.left -= offsetConfig.left

  return isCross(el.getBoundingClientRect(), contRect)
}


export default isInViewport

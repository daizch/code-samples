/**
 * weather browser supports the specific css style or property
 * in the css file
 * @supports (position: sticky) {
 * div { position: sticky; }
 * }
 */

function camelize(str) {
  return str.replace(/-(\w)/g, (_, c) => c ? c.toUpperCase() : '');
}

function supportCss(prop, value) {
  if (!value) {
    return camelize(prop) in document.body.style
  } else if (typeof CSS.supports === 'function') {
    return CSS.supports(prop, value)
  } else {
    var $el = document.createElement('div');
    $el.style[prop] = value;
    return $el.style[prop] === value;
  }
}
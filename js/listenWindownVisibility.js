function listenWindowVisibility(fn) {
  var hidden = 'hidden';
  var doc = document
  var eventName
  var offEvent

  if (hidden in doc) {
    eventName = 'visibilitychange'
  } else if ((hidden = 'mozHidden') in doc) {
    eventName = 'mozvisibilitychange'
  } else if ((hidden = 'webkitHidden') in doc) {
    eventName = 'webkitvisibilitychange'
  } else if ((hidden = 'msHidden') in doc) {
    eventName = 'msvisibilitychange'
  } else {
    let events =['pageshow','pagehide','focus','blur']
    events.forEach(eventName=>{
      window.addEventListener(eventName, onchange)
    })
    offEvent = function () {
      events.forEach(eventName=>{
        window.removeEventListener(eventName, onchange)
      })
    }
  }

  if (eventName) {
    doc.addEventListener(eventName, onchange);
    offEvent = function () {
      doc.removeEventListener(eventName, onchange);
    }
  }

  function onchange(evt) {
    var v = 'visible';
    var h = 'hidden';
    var evtMap = {
      focus: v, focusin: v, pageshow: v, blur: h, focusout: h, pagehide: h
    };
    var type

    evt = evt || window.event;
    if (evt.type in evtMap) {
      type = evtMap[evt.type];
    } else {
      type = this[hidden] ? 'hidden' : 'visible';
    }

    if (type === 'visible') {
      fn()
    }
  }
}
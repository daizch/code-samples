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


function visibilityEvent() {
  var hidden, visibilityChange;
  if (typeof document.hidden !== "undefined") { // Opera 12.10 and Firefox 18 and later support
    hidden = "hidden";
    visibilityChange = "visibilitychange";
  } else if (typeof document.msHidden !== "undefined") {
    hidden = "msHidden";
    visibilityChange = "msvisibilitychange";
  } else if (typeof document.webkitHidden !== "undefined") {
    hidden = "webkitHidden";
    visibilityChange = "webkitvisibilitychange";
  }
  if (typeof document.addEventListener === "undefined" || typeof document[hidden] === "undefined") {
    console.log("This demo requires a browser, such as Google Chrome or Firefox, that supports the Page Visibility API.");
  } else {
    // 处理页面可见属性的改变
    document.addEventListener(visibilityChange, handleVisibilityChange, false);
  }

  function handleVisibilityChange() {
    if (document[hidden]) {
      //hide
    } else {
      //show
    }
  }
}
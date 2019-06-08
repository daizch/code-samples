var isSupportWebp;
(function isSupportWebp(callback) {
  var webP = new Image();
  webP.src = 'data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=';

  webP.onload = webP.onerror = function () {
    callback(webP.height === 1);
  };
})((is) => {
  isSupportWebp = is
  console.log('isSupportWebp', isSupportWebp)
});
const idleCallbackSupport = "requestIdleCallback" in window;
const idleCallbackOptions = {
  timeout: 1e4
}

function lazyLoadImg(el, callback) {
  var $el;
  if (!el) {
    $el = document.body;
  } else if (typeof el === 'function') {
    callback = el
    $el = document.body;
  } else {
    $el = typeof el === 'string' ? document.querySelector(el) : el;
  }
  document.addEventListener("DOMContentLoaded", function () {
    var lazyImages = [].slice.call($el.querySelectorAll("img.lazy"));

    if ("IntersectionObserver" in window) {
      let lazyImageObserver = new IntersectionObserver(function (entries, observer) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            let lazyImage = entry.target;

            if (callback && typeof callback === 'function') {
              if (idleCallbackSupport) {
                requestIdleCallback(() => {
                  callback(lazyImage)
                }, idleCallbackOptions);
              } else {
                callback(lazyImage)
              }
            } else {
              lazyImage.src = lazyImage.dataset.src;
              lazyImage.srcset = lazyImage.dataset.srcset;
              lazyImage.classList.remove("lazy");
            }
            lazyImageObserver.unobserve(lazyImage);
          }
        });
      });

      lazyImages.forEach(function (lazyImage) {
        lazyImageObserver.observe(lazyImage);
      });
    } else {
      // Possibly fall back to a more compatible method here
    }
  });
}

function lazyLoad2() {
  document.addEventListener("DOMContentLoaded", function () {
    let lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));
    let active = false;

    const lazyLoad = function () {
      if (active === false) {
        active = true;

        setTimeout(function () {
          lazyImages.forEach(function (lazyImage) {
            let rect = lazyImage.getBoundingClientRect();
            if ((rect.top <= window.innerHeight && rect.bottom >= 0) && getComputedStyle(lazyImage).display !== "none") {
              lazyImage.src = lazyImage.dataset.src;
              lazyImage.srcset = lazyImage.dataset.srcset;
              lazyImage.classList.remove("lazy");

              lazyImages = lazyImages.filter(function (image) {
                return image !== lazyImage;
              });

              if (lazyImages.length === 0) {
                document.removeEventListener("scroll", lazyLoad);
                window.removeEventListener("resize", lazyLoad);
                window.removeEventListener("orientationchange", lazyLoad);
              }
            }
          });

          active = false;
        }, 200);
      }
    };

    document.addEventListener("scroll", lazyLoad);
    window.addEventListener("resize", lazyLoad);
    window.addEventListener("orientationchange", lazyLoad);
  });
}


/**
 //css content
 .lazy-background {
  background-image: url("hero-placeholder.jpg");
}

 .lazy-background.visible {
  background-image: url("hero.jpg");
}
 */
function lazyLoadCssImage() {
  document.addEventListener("DOMContentLoaded", function () {
    var lazyBackgrounds = [].slice.call(document.querySelectorAll(".lazy-background"));

    if ("IntersectionObserver" in window) {
      let lazyBackgroundObserver = new IntersectionObserver(function (entries, observer) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            lazyBackgroundObserver.unobserve(entry.target);
          }
        });
      });

      lazyBackgrounds.forEach(function (lazyBackground) {
        lazyBackgroundObserver.observe(lazyBackground);
      });
    }
  });
}


function lazyLoadVideo() {
  document.addEventListener("DOMContentLoaded", function () {
    var lazyVideos = [].slice.call(document.querySelectorAll("video.lazy"));

    if ("IntersectionObserver" in window) {
      var lazyVideoObserver = new IntersectionObserver(function (entries, observer) {
        entries.forEach(function (video) {
          if (video.isIntersecting) {
            for (var source in video.target.children) {
              var videoSource = video.target.children[source];
              if (typeof videoSource.tagName === "string" && videoSource.tagName === "SOURCE") {
                videoSource.src = videoSource.dataset.src;
              }
            }

            video.target.load();
            video.target.classList.remove("lazy");
            lazyVideoObserver.unobserve(video.target);
          }
        });
      });

      lazyVideos.forEach(function (lazyVideo) {
        lazyVideoObserver.observe(lazyVideo);
      });
    }
  });
}
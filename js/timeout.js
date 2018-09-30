
/**
 timeoutFn(1, function(){
  return new Promise(function(resolve, reject){
    //do sth
  })
 })
 */

function timeoutFn(sec, fn) {
  let timeout = new Promise(function (resolve, reject) {
    setTimeout(() => {
      reject('timeout');
    }, sec * 1000);
  });
  let task = fn();
  return Promise.race([timeout, task]);
}
function performanceTest(){
  let timing = performance.timing,
    readyStart = timing.fetchStart - timing.navigationStart,
    redirectTime = timing.redirectEnd  - timing.redirectStart,
    appcacheTime = timing.domainLookupStart  - timing.fetchStart,
    unloadEventTime = timing.unloadEventEnd - timing.unloadEventStart,
    lookupDomainTime = timing.domainLookupEnd - timing.domainLookupStart,
    connectTime = timing.connectEnd - timing.connectStart,
    requestTime = timing.responseEnd - timing.requestStart,
    initDomTreeTime = timing.domInteractive - timing.responseEnd,
    domReadyTime = timing.domComplete - timing.domInteractive,
    loadTime = timing.loadEventEnd - timing.navigationStart;

  console.log('准备新页面时间耗时: ' + readyStart);
  console.log('redirect 重定向耗时: ' + redirectTime);
  console.log('Appcache 耗时: ' + appcacheTime);
  console.log('unload 前文档耗时: ' + unloadEventTime);
  console.log('DNS 查询耗时: ' + lookupDomainTime);
  console.log('TCP连接耗时: ' + connectTime);
  console.log('request请求耗时: ' + requestTime);
  console.log('请求完毕至DOM加载: ' + initDomTreeTime);
  console.log('解释dom树耗时: ' + domReadyTime);
  console.log('load事件耗时: ' + loadEventTime);
  console.log('从开始至load总耗时: ' + loadTime);
}
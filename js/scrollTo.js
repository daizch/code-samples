//https://github.com/kamranahmedse/driver.js/tree/master/src/core
//element.scrollIntoView()
scrollManually(node) {
  const elementRect = node.getBoundingClientRect();
  const absoluteElementTop = elementRect.top + window.pageYOffset;
  const middle = absoluteElementTop - (window.innerHeight / 2);

  this.window.scrollTo(0, middle);
}
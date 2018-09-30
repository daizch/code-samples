//https://github.com/kamranahmedse/driver.js/blob/master/src/common/utils.js

createNodeFromString = (htmlString) => {
  const div = document.createElement('div');
  div.innerHTML = htmlString.trim();

  // Change this to div.childNodes to support multiple top-level nodes
  return div.firstChild;
};
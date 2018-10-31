//https://github.com/kamranahmedse/driver.js/tree/master/src/core
class PositionElement {
  autoPosition(elementPosition) {
    const pageSize = this.getFullPageSize();
    const popoverSize = this.getSize();

    const pageHeight = pageSize.height;
    const popoverHeight = popoverSize.height;
    const popoverMargin = this.options.padding + 10;  // adding 10 to give it a little distance from the element

    const pageHeightAfterPopOver = elementPosition.bottom + popoverHeight + popoverMargin;

    // If adding popover would go out of the window height, then show it to the top
    if (pageHeightAfterPopOver >= pageHeight) {
      this.positionOnTop(elementPosition);
    } else {
      this.positionOnBottom(elementPosition);
    }
  }

  positionOnTop(elementPosition) {
    const popoverHeight = this.getSize().height;
    const popoverMargin = this.options.padding + 10;  // adding 10 to give it a little distance from the element

    this.node.style.top = `${elementPosition.top - popoverHeight - popoverMargin}px`;
    this.node.style.left = `${elementPosition.left - this.options.padding}px`;
    this.node.style.right = '';
    this.node.style.bottom = '';

    this.tipNode.classList.add('bottom');
  }

  positionOnBottom(elementPosition) {
    const popoverMargin = this.options.padding + 10;  // adding 10 to give it a little distance from the element

    this.node.style.top = `${elementPosition.bottom + popoverMargin}px`;
    this.node.style.left = `${elementPosition.left - this.options.padding}px`;
    this.node.style.right = '';
    this.node.style.bottom = '';

    this.tipNode.classList.add('top');
  }

  getFullPageSize() {
    // eslint-disable-next-line prefer-destructuring
    const body = this.document.body;
    const html = this.document.documentElement;

    return {
      height: Math.max(body.scrollHeight, body.offsetHeight, html.scrollHeight, html.offsetHeight),
      width: Math.max(body.scrollWidth, body.offsetWidth, html.scrollWidth, html.offsetWidth),
    };
  }

  /**
   * Gets the size for popover
   * @returns {{height: number, width: number}}
   * @public
   */
  getSize() {
    return {
      height: Math.max(this.node.scrollHeight, this.node.offsetHeight),
      width: Math.max(this.node.scrollWidth, this.node.offsetWidth),
    };
  }
}
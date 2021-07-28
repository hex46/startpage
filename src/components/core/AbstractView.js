import AbstractObject from './AbstractObject'

export default class AbstractView extends AbstractObject {
  /**
   * Generate the view that will be added in the MAIN element of the index page
   */
  render () {
    throw new Error('render function must be override!')
  }

  /**
   * Update an item in the view.
   * The varName variable will be used to find the element in the DOM
   * @param {string} varName name of the variable.
   * @param {string} value New value
   */
  update (varName, value) {
    const element = document.querySelector(`[data-bind='${varName}']`)
    if (element) {
      element.innerHTML = value
    }
  }
}

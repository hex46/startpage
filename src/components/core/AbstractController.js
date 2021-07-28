/* global alert */

import AbstractObject from './AbstractObject'
import Router from './Router'

export default class AbstractController extends AbstractObject {
  constructor (path, view, model) {
    super()
    if (!path) {
      throw new Error('path cannot be undefined!')
    }

    if (!view) {
      throw new Error('view cannot be undefined!')
    }

    if (!model) {
      throw new Error('Model cannot be undefined!')
    }

    if (!model.addObserver) {
      throw new Error('Model must extend AbstractModel!')
    }

    this.model = model
    this.view = view
    this.path = path
    this.model.addObserver(this)
    Router.addRoute(path, this)
  }

  /**
   * Indicate to the view that a model element has changed
   * Observer design pattern
   * @param {string} varName name of the variable. Will be used to find the corresponding DOM element
   * @param {string} value New value
   */
  notify (varName, value) {
    this.view.update(varName, value)
  }

  renderView () {
    return this.view.render()
  }

  /**
   * Displays a message to the user indicating that the functionality is not yet implemented
   */
  notImplemented () {
    const message = 'Not implemented yet!'

    console.warn(message)
    alert(message)
  }

  /**
   * Called when the page/controller is changed to this controller.
   * Can be used to start threads or other things
   */
  init () {
    // Do stuff if needed
  }

  /**
   * Called when the page/controller is changed.
   * Can be used to stop threads or other things
   */
  destroy () {
    // Do stuff if needed
  }
}

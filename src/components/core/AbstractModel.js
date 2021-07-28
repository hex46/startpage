import AbstractObject from './AbstractObject'

export default class AbstractModel extends AbstractObject {
  constructor () {
    super()
    this.observers = []

    const self = this
    return new Proxy(this, {
      set (target, name, value) {
        target[name] = value

        if (name !== 'globalVarName') {
          self.notifyObservers(name, value)
        }

        return true
      }
    })
  }

  /**
   * Add an observer who will be notified when a property changes
   * @param {AbstractController} observer
   */
  addObserver (observer) {
    if (!observer.notify) {
      throw new Error('Controller must extend AbstractController!')
    }

    this.observers.push(observer)
  }

  /**
   * Notify observers of a change
   * @param {string} varName name of the variable. Will be used to find the corresponding DOM element
   * @param {string} value New value
   */
  notifyObservers (varName, value) {
    for (const obs of this.observers) {
      obs.notify(varName, value)
    }
  }
}

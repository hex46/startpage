export default class AbstractObject {
  /**
   * Is used to add the current object to a window variable
   * @param {string} varName
   */
  asGlobalVariable (varName) {
    if (!varName) {
      throw new Error('varName cannot be undefined!')
    }

    window[varName] = this
    this.globalVarName = varName
  }
}

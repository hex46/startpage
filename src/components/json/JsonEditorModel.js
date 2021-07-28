import AbstractModel from '../core/AbstractModel'

export default class JsonEditorModel extends AbstractModel {
  set input (input) {
    if (input && input !== '') {
      this.inputValue = JSON.parse(input)
    } else {
      this.inputValue = undefined
    }
  }

  get input () {
    return this.inputValue
  }

  getIndentedJson () {
    return JSON.stringify(this.inputValue, null, 4)
  }

  getOneLineJson () {
    return JSON.stringify(this.inputValue)
  }
}

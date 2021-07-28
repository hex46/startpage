import AbstractController from '../core/AbstractController'

export default class JsonEditorController extends AbstractController {
  updateModel (element) {
    try {
      this.model.input = element.value.trim()
      this.view.validInput()
    } catch (err) {
      this.view.invalidInput(err)
    }
  }

  showJsonOneLine () {
    const jsonStr = this.model.getOneLineJson()
    this.view.updateOutput(jsonStr)
  }

  showIndentedJson () {
    const jsonStr = this.model.getIndentedJson()
    this.view.updateOutput(jsonStr)
  }
}

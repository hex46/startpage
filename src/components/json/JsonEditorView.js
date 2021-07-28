import AbstractView from '../core/AbstractView'
import html from './jsonEditor.html'

export default class JsonEditorView extends AbstractView {
  render () {
    return html
  }

  invalidInput (message) {
    try {
      this.modifyClassInput('invalid', true)
      this.updateMessage(message, false)
    } catch (err) {
      console.error(err)
    }
  }

  validInput () {
    try {
      this.modifyClassInput('invalid', false)
      this.updateMessage('', true)
    } catch (err) {
      console.error(err)
    }
  }

  modifyClassInput (className, add) {
    const root = this.getContextElement()
    const inputElement = root.querySelector('textarea')

    if (add) {
      inputElement.classList.add(className)
    } else {
      inputElement.classList.remove(className)
    }
  }

  getContextElement () {
    return document.querySelector('.jsonEditor')
  }

  updateOutput (value) {
    try {
      const root = this.getContextElement()
      const outputElement = root.querySelector('#output')

      console.log(value, outputElement)
      outputElement.innerHTML = value.replaceAll(/\n/g, '<br/>').replaceAll(/\s/g, '&nbsp;')
    } catch (err) {
      console.error(err)
    }
  }

  updateMessage (message, hidden) {
    const root = this.getContextElement()
    const messageDiv = root.querySelector('.message')
    messageDiv.innerHTML = message
  }
}

import AbstractController from '../core/AbstractController'

export default class HomeController extends AbstractController {
  init () {
    this.initializeToday()
    this.initializeTime()
  }

  destroy () {
    clearInterval(this.intervalId)
  }

  async initializeToday () {
    const today = new Date()
    this.model.today = new Intl.DateTimeFormat('fr-FR', { dateStyle: 'full' }).format(today)
  }

  async initializeTime () {
    const self = this

    function updateTime () {
      const today = new Date()
      self.model.time = new Intl.DateTimeFormat('fr-FR', { timeStyle: 'short' }).format(today)
    }

    updateTime()
    this.intervalId = setInterval(updateTime, 1000 * 30)
  }

  search (element) {
    const input = element.querySelector('input')
    const inputValue = input.value

    const searchURL = `https://duckduckgo.com/?q=${inputValue}`
    document.location.replace(searchURL)

    return false
  }
}

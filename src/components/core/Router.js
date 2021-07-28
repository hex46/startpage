import AbstractObject from './AbstractObject'

class Router extends AbstractObject {
  constructor () {
    super()

    this.routes = []
    this.currentController = undefined
    this.pathRegex = '^(/.*)$'
    this.asGlobalVariable('router')

    const self = this
    window.addEventListener('popstate', () => {
      self.navigateTo()
    })
  }

  /** 
   * Add a route to router
   * @param {string} path format '(/<route>)+'
   * @param {AbstractController} controller render view and do some stuff
   */
  addRoute (path, controller) {
    if (!path) {
      throw new Error('path cannot be undefined!')
    }

    if (!controller) {
      throw new Error('controller cannot be undefined!')
    }

    if (!controller.renderView) {
      throw new Error('Controller doesn\'t have renderView function!')
    }

    this.routes.push({ path: path, controller: controller })
    console.debug(`Route ${path} added!`)
  }

  /**
   * Change the view depending on the path in the URL
   */
  navigateTo (path) {
    const mainElement = document.querySelector('main')
    if (!mainElement) {
      throw new Error('Cannod find <main> element in DOM')
    }

    if (this.currentController) {
      this.currentController.destroy()
    }

    const route = this.getCurrentRoute(path)

    this.currentController = route.controller
    mainElement.innerHTML = this.currentController.renderView()
    this.currentController.init()

    return false // for onclick="..."
  }

  /**
   * Get route from current location
   */
  getCurrentRoute (path) {
    if (this.routes.length === 0) {
      throw new Error('routes is not initialized!')
    }

    let route
    if (path) {
      window.history.pushState(null, null, path)
      route = this.routes.find(route => path.match(this.pathRegex)[0] === route.path)
    } else {
      route = this.routes.find(route => window.location.pathname.match(this.pathRegex)[0] === route.path)
    }

    // Route not found - return first root
    // Maybe I'd add a 404 route someday
    return route || this.routes[0]
  }
}

export default new Router()

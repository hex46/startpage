import './home.scss'
import HomeController from './HomeController'
import HomeView from './HomeView'
import HomeModel from './HomeModel'

const homeView = new HomeView()
const homeModel = new HomeModel()
const homeController = new HomeController('/', homeView, homeModel)

homeController.asGlobalVariable('homeController')

import AbstractModel from '../core/AbstractModel'

export default class HomeModel extends AbstractModel {
  set today (today) {
    this.todayValue = today
  }

  get today () {
    return this.todayValue
  }

  set time (newTime) {
    this.timeValue = newTime
  }

  get time () {
    return this.timeValue
  }
}

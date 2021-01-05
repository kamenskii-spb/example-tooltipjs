import {DomListener} from './DomListener';
import {$} from './dom.js'

export class AppComponent extends DomListener {
  constructor($root, options = {}) {
    super($root, options.listeners);
    this.name = options.name
    this.emitter = options.emitter

  }
  // возвращает шаблон компонента
  toHTML() {
    return ''
  }

  render(html = '') {
    $(this.$root.$el).html(html)
  }

  init() {
    this.initDOMListeners()
  }

  destroy() {
    this.removeDOMListeners()
  }
}

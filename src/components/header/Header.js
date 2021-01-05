import { AppComponent } from '~core/AppComponent.js';
export class Header extends AppComponent {
constructor($root,options) {
  super($root, {
    name: 'Header',
    ...options
  });
}
  static className = ['app__header']
  toHTML() {
    return `
    <header>
      <h1 class="header orange-text"> Tooltip js </h1>
    </header>
    `
  }
}

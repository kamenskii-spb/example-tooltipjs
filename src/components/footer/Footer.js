import { AppComponent } from '~core/AppComponent.js';
export class Footer extends AppComponent {
constructor($root,options) {
  super($root, {
    name: 'Footer',
    ...options
  });
}
  static className = ['app__footer']
  toHTML() {
    return `
        <footer class="page-footer">
          <div class="footer-copyright">
            <div class="container">
            © 2021 Tooltip js
            <a class="grey-text text-lighten-4 right" href="https://www.npmjs.com/package/@kamenskii/tooltip">npmjs</a>
            </div>
          </div>
        </footer>
    `
  }
}

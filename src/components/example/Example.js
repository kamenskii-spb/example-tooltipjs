import { AppComponent } from "~core/AppComponent.js";
import { createExampleOptions, createPrismAdd } from "./example.templates.js";
import Tooltip from "@kamenskii/tooltip";

export class Example extends AppComponent {
  constructor($root, options) {
    super($root, {
      name: "Example",
      listeners: ["mouseenter"],
      ...options,
    });

    this.setting = {
      cross: true,
      tooltipMove: true,
      width: 150,
      color: "#ccc",
      padding: 5,
      margin: 10,
      position: "left",
      border: "1px solid",
      animation: true,
      class: "my-class",
    };

    this.tooltip = new Tooltip(this.$root.$el, this.setting);

    this.emitter.subscribe("form:change", (settings, name, value) => {
      this.setting = { ...this.setting, ...settings };
      const changeVal = this.$root
        .find(`[id=${name}]`)
        .html(`${name}: <span>${value}</span>`);
      _animationText(changeVal.$el);
      this.tooltip.destroy();
      this.tooltip = new Tooltip(this.$root.$el, this.setting);
    });
  }
  static className = ["app__example", "article"];

  toHTML() {
    return createExampleOptions(this.setting);
  }
  onMouseenter() {
    this.tooltip.open("tooltip html");
  }
}

function _animationText($el) {
  $el = $el.lastChild;

  const opacityAnimate = (ms = 40) => {
    let animationStart = false;
    if (animationStart) return;
    animationStart = true;
    let opacity = 0.1;
    let timerId = setInterval(() => {
      $el.style.background = `rgba(249, 191, 59, ${opacity})`;
      if (opacity >= 0.7) {
        clearInterval(timerId);
        let timerId2 = setInterval(() => {
          $el.style.background = `rgba(249, 191, 59, ${opacity})`;
          if (opacity === 0) {
            clearInterval(timerId2);
          } else {
            opacity = opacity - 0.1;
          }
        }, ms);
      } else {
        opacity = opacity + 0.1;
      }
    }, ms);
  };

  opacityAnimate();
}

import { AppComponent } from "~core/AppComponent.js";
import {
  createCheckboxs,
  createSelects,
  createInputs,
} from "./form.templates.js";
export class Form extends AppComponent {
  constructor($root, options) {
    super($root, {
      name: "Form",
      listeners: ["change"],
      ...options,
    });

    this.setting = {};

    this.formFildcheck = ["tooltipMove", "cross", "animation"];
  }
  static className = ["app__form", "article"];
  toHTML() {
    const checkboxRender = () => createCheckboxs(this.formFildcheck);
    const selectRender = () =>
      createSelects(["left", "right", "top", "bottom"]);
    const inputRender = () =>
      createInputs([
        { name: "width", value: 150, type: "number" },
        { name: "padding", value: 5, type: "number" },
        { name: "margin", value: 10, type: "number" },
        { name: "color", value: "#ccc", type: "text" },
        { name: "border", value: "1px solid", type: "text" },
      ]);

    return (
      "<h3>Example</h3>" + selectRender() + inputRender() + checkboxRender()
    );
  }

  onChange() {
    let { name, checked, value } = event.target;
    const formFildInput = ["position", "color", "border"];

    const emit = (name, value) =>
      this.emitter.emit("form:change", this.setting, name, value);

    if (this.formFildcheck.includes(name)) {
      this.setting[name] = checked;
      emit(name, checked);
      return;
    }

    if (formFildInput.includes(name)) {
      this.setting[name] = value.trim();
      emit(name, "'" + value + "'");
      return;
    }

    if (name) {
      value = Number.parseInt(value);
      if (value <= 1) {
        event.target.value = 1;
        value = 1;
      }
      this.setting[name] = value;
      emit(name, value);
      return;
    }
  }
}

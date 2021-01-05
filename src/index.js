import "./css/main.css";
import { App } from "./components/app/App.js";
import { Header } from "./components/header/Header";
import { Form } from "./components/form/Form";
import { Example } from "./components/example/Example";
import { Instruction } from "./components/instruction/Instruction";
import { Footer } from "./components/footer/Footer";

const app = new App('#example-tooltip', {
  components: [Header, Instruction, Form, Example, Footer]
})


app.render()


import { AppComponent } from "~core/AppComponent.js";
export class Instruction extends AppComponent {
  constructor($root, options) {
    super($root, {
      name: "Instruction",
      ...options,
    });
  }
  static className = ["app__Instruction", "article"];
  toHTML() {
    return `
    <h5>Install</h5>
    Create tooltip experiance in pure javascript.
    <pre><code class="language-npm">
    npm install @kamenskii/tooltip --save
  </code></pre>

    <h5>Import/ES6</h5>
    <pre class="language-javascript"><code class="language-javascript">
    import Tooltip from 'Tooltip.js';
  </code></pre>


<h5>Classic</h5>
<pre class=" language-markup"><code class=" language-markup">
    <span class="token comment" spellcheck="true">
    &lt;!-- Compiled and minified JavaScript --&gt;</span>
    <span class="token script language-javascript">
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>your/path/tooltip.js<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span></span>
  </code></pre>

  <h5>Initialization</h5>
  <pre class="language-javascript"><code class="language-javascript">
   var instance = new Tooltip('.element', options)
</code></pre>

<h3>Methods</h3>

<h5>.open</h5>
Show tooltip.<br>
<code class="language-javascript">
instance.open('html');
</code>

<h5>.close</h5>
Hide tooltip.<br>
<code class="language-javascript">
instance.close();
</code>

<h5>.destroy</h5>
Destroy plugin instance and teardown.<br>
<code class="language-javascript">
instance.destroy();
</code>


<table class="striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Default</th>
              <th>Description</th>
            </tr>
          </thead>

<h3>Options</h3>
          <tbody>
            <tr>
              <td>margin</td>
              <td>Number</td>
              <td>10</td>
              <td>Set distance tooltip appears away from its activator.</td>
            </tr>
            <tr>
              <td>padding</td>
              <td>Number</td>
              <td>5</td>
              <td>Set tooltip padding.</td>
            </tr>
            <tr>
              <td>position</td>
              <td>String</td>
              <td>'left'</td>
              <td>Set the direction of the tooltip. 'top', 'right', 'bottom', 'left'.</td>
            </tr>
            <tr>
              <td>tooltipMove</td>
              <td>Boolian</td>
              <td>false</td>
              <td>tooltip move.</td>
            </tr>
            <tr>
              <td>cross</td>
              <td>Boolian</td>
              <td>false</td>
              <td>cross for close tooltip</td>
            </tr>
            <tr>
              <td>Animation</td>
              <td>Object</td>
              <td>{show, 100}</td>
              <td>show animation </td>
            </tr>
            <tr>
              <td>color</td>
              <td>String</td>
              <td>'#ccc'</td>
              <td>border color</td>
            </tr>
            <tr>
              <td>border</td>
              <td>String</td>
              <td>'1px solid'</td>
              <td>border style</td>
            </tr>
            <tr>
              <td>class</td>
              <td>String</td>
              <td>''</td>
              <td>add tooltip class</td>
            </tr>
          </tbody>
        </table>


    `;
  }
}

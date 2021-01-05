

export function createExampleOptions (setting) {
  return `
    <h5>Example</h5>
    <ul class="example-config">
    <li>{</li>
    <li id="position">position: <span>'${setting.position}'</span>,</li>
    <li id="tooltipMove">tooltipMove: <span>${setting.tooltipMove}</span>,</li>
    <li id="cross">cross: <span>${setting.cross}</span>,</li>
    <li id="animation" >animation: <span>${setting.animation}</span>,</li>
    <li id="width">width: <span>${setting.width}</span>,</li>
    <li id="padding">padding: <span>${setting.padding}</span>,</li>
    <li id="margin">margin: <span>${setting.margin}</span>,</li>
    <li id="color">color: <span>'${setting.color}'</span>,</li>
    <li id="border">border: <span>'${setting.border}'</span></li>
    <li>}</li>
    </ul>
  `

}

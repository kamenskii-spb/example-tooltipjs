export function createCheckboxs (checkboxs = []){
checkboxs = checkboxs
    .map((checkbox) => {
      return `
  <div class="form-checkbox">
    <label>
      <input
        name="${checkbox}"
        type="checkbox"
        class="filled-in"
        checked="checked"
      />
      <span>${checkbox}</span>
    </label>
  </div>
    `;
    })
    .join("");

    return '<div class="form-group">' + checkboxs + '</div>'
}

export function createInputs (imputs){
  imputs = imputs
    .map((imput) => {
      return `
  <div class="form-imput">
   <label for="${imput.name}">${imput.name}</label>
    <div>
    <input
    name="${imput.name || ''}"
    type="${imput.type || 'number'}"
    value="${imput.value || ''}"
    class="${imput.class || ''}" /> : ${imput.type}
    </div>
    </div>
    `;
    })
    .join("");

    return '<div class="inputs form-group">' + imputs + '</div>'
}

export function createSelects (options = []){
  const select =
    `<div class="form-selects form-group">
   <label>Position</label>
    <select name='position' class='browser-default' >` +
    options
      .map((option) => {
        return `<option name="position" value="${option}" >${option}</option>`;
      })
      .join("") +
    "</select> </div>";
  return select;
}

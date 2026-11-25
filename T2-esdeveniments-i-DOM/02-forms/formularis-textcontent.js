// Variant de formularis.js: renderitza l'interfície creant nodes DOM.

const validate = (data) => {
  const errors = {};

  if (!data.name || data.name.trim() === "") {
    errors.name = "Camp obligatori";
  }

  if (!data.lastname || data.lastname.trim() === "") {
    errors.lastname = "Camp obligatori";
  }

  return errors;
};

const initialValues = {
  name: "",
  lastname: ""
};

// El contenidor es manté al DOM; el formulari es pot reemplaçar quan es renderitza.
const app = document.createElement("main");
app.id = "form-app";
document.body.append(app);

const render = ({ data, errors, message = "" }) => {
  const form = document.createElement("form");
  form.name = "formulari";

  const fields = [
    { name: "name", label: "Nom" },
    { name: "lastname", label: "Cognom" }
  ];

  fields.forEach(({ name, label }) => {
    const field = document.createElement("div");

    const fieldLabel = document.createElement("label");
    fieldLabel.htmlFor = name;
    fieldLabel.textContent = label;

    const input = document.createElement("input");
    input.id = name;
    input.name = name;
    input.type = "text";
    input.value = data[name] ?? "";

    field.append(fieldLabel, input);

    if (errors[name]) {
      const errorMessage = document.createElement("span");
      errorMessage.className = "field-error";
      errorMessage.setAttribute("role", "alert");
      errorMessage.textContent = errors[name];
      input.setAttribute("aria-invalid", "true");
      field.append(errorMessage);
    }

    form.append(field);
  });

  const submit = document.createElement("button");
  submit.type = "submit";
  submit.textContent = "Enviar";
  form.append(submit);

  if (message) {
    const status = document.createElement("p");
    status.setAttribute("aria-live", "polite");
    status.textContent = message;
    form.append(status);
  }

  return form;
};

const renderApp = (state) => {
  app.replaceChildren(render(state));
};

// El listener queda al contenidor estable, no al formulari que es torna a crear.
app.addEventListener("submit", (event) => {
  if (!(event.target instanceof HTMLFormElement) || event.target.name !== "formulari") {
    return;
  }

  event.preventDefault();

  const formData = new FormData(event.target);
  const data = {
    name: String(formData.get("name") ?? ""),
    lastname: String(formData.get("lastname") ?? "")
  };
  const errors = validate(data);

  if (Object.keys(errors).length > 0) {
    renderApp({ data, errors });
    return;
  }

  renderApp({
    data,
    errors,
    message: `Dades validades: ${data.name} ${data.lastname}`
  });
});

renderApp({ data: initialValues, errors: {} });

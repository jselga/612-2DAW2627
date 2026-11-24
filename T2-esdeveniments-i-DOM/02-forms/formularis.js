let validate = data => {
    let errors = {};
    if (!data.name) {
        errors.name = 'Camp obligatori';
    }
    if (!data.lastname) {
        errors.lastname = 'Camp obligatori';
    }
    return errors;
}
let initialValues = {
    name: '',
    lastname: ''
}
let render = ({ data, errors }) => {
    return `
            <form name="formulari">
      <div>
        <label>Nom</label>
        <input type="text" name="name" value="${data.name}"  />
        ${errors.name || ''}
      </div>
      <div>
        <label>Cognom</label>
        <input type="text" name="lastname"  value="${data.lastname}" />
        ${errors.lastname || ''}
      </div>
      <div><button>Enviar</button></div>
    </form>
    `
}
let form = document.createElement('form');
form.innerHTML = render({ data: initialValues, errors: {} });
document.body.append(form);
form.addEventListener('submit', e => {
    e.preventDefault();
    // console.log(e.target.elements);
    let data = Array.from(e.target.elements).reduce((acc, el) => {
        if (!el.name) return acc;
        acc[el.name] = el.value;
        return acc;
    }, {})
    //    console.log(data);
    const errors = validate(data);
    console.log(errors);
    if (Object.keys(errors).length > 0) {
        let html = render({ errors, data });
        form.innerHTML = html;
        return;
    }


})
const submit = document.getElementById('inputSubmit');
const names = document.getElementById('inputNames');
const pay = document.getElementById('inputPay');
const born = document.getElementById('inputBorn');
const email = document.getElementById('inputEmail');
const country = document.getElementById('inputCountry');
const password = document.getElementById('inputPassword');
const terms = document.getElementById('inputTerms');

const objectValid = {
    nombres: false,
    pagos: false,
    expiracion: false,
    correo: false,
    ciudad: false,
    contraseña: false,
    terminos: false
};

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if(validForm() === -1){
        alert('Realizando compra');
    }else{
        alert('Error en los datos de la compra')
    }
});

const validForm = () => {
    const values = Object.values(objectValid);
    let response = values.findIndex(e => e === false);
    return response;
};

names.addEventListener('change',(e) => {
    console.log(e.target);
    const namesRegex = /^([a-zA-ZÀ-ÖØ-öø-ÿ]{4,25})([\s]?)([a-zA-ZÀ-ÖØ-öø-ÿ]{0,25})$/g;
    let valornames = e.target.value;
    objectValid.nombres = e.target.value.match(namesRegex) ? true : false;
    console.log(Object.values(objectValid));
});

pay.addEventListener('change', (e) => {
    console.log(e.target);
    if(!document.querySelector('input[name="pago"]:checked')) {
        alert('Error, rellena el campo medios de pago');
    }
    objectValid.pagos = e.target.checked;
    console.log(Object.values(objectValid));
});

born.addEventListener('change', (e) => {
    console.log(e.target);
    const dateRegex = /^(0[1-9]|1[0-2])(\/|-)([0-9]{4})$/gm; 
    let valorborn = e.target.value;
    objectValid.expiracion = e.target.value.match(dateRegex) ? true : false;
    console.log(Object.values(objectValid));
});

email.addEventListener('change', (e) => {
    console.log(e.target);
    const emailRegex = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gim;
    let valoremail = e.target.value;
    objectValid.correo = e.target.value.match(emailRegex) ? true : false;
    console.log(Object.values(objectValid));
});

country.addEventListener('change', (e) => {
    console.log(e.target);
});

password.addEventListener('change', (e) => {
    console.log(e.target);
    
});

terms.addEventListener('change', (e) => {
   objectValid.terminos = e.target.checked ; false;
   console.log(Object.values(objectValid)); 
});


let inputNombre = document.getElementById("txtNombre");
let inputCorreo = document.getElementById("txtCorreo");
let inputNacimiento = document.getElementById("txtNacimiento");
let inputContrasenna = document.getElementById("txtContrasenna");
let inputConfirmacion = document.getElementById("txtConfirmacion");
let btnRegistrar = document.getElementById("btnRegistrar");


function validar(){
    let validacionCorrecta = true;
    if(inputNombre.value == ""){
        validacionCorrecta = false;
        inputNombre.classList.add('inputError');
    }else{
        inputNombre.classList.remove('inputError');
    }

    if(inputCorreo.value == ""){
        validacionCorrecta = false;
        inputCorreo.classList.add('inputError');
    }else{
        inputCorreo.classList.remove('inputError');
    }

    if(inputNacimiento.value == ""){
        validacionCorrecta =false;
        inputNacimiento.classList.add('inputError');
    }else{
        inputNacimiento.classList.remove('inputError');
    }

    if(inputContrasenna.value == ""){
        validacionCorrecta =false;
        inputContrasenna.classList.add('inputError');
    }else{
        inputContrasenna.classList.remove('inputError');
    }
    if(inputConfirmacion.value == ""){
        validacionCorrecta =false;
        inputConfirmacion.classList.add('inputError');
    }else{
        inputConfirmacion.classList.remove('inputError');
    }

    if(inputContrasenna.value !== inputConfirmacion.value || inputContrasenna.value.length == 0){
        validacionCorrecta = false;
        inputContrasenna.classList.add('inputError');
        inputConfirmacion.classList.add('inputError');
    }else{
        inputContrasenna.classList.remove('inputError');
        inputConfirmacion.classList.remove('inputError');
    }
    if(validacionCorrecta == true){
        console.log("Validación fue correcta");
    }else{
        console.log("Validación incorrecta");
    }
}


btnRegistrar.addEventListener("click", validar);
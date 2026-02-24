let inputContrasenna = document.getElementById("txtContrasenna");
let inputConfirmacion = document.getElementById("txtConfirmacion");
let camposRequeridos = document.querySelectorAll(":required");
let btnRegistrar = document.getElementById("btnRegistrar");

function validar(){
    let validacionCorrecta = true;

    camposRequeridos.forEach(campo =>{
        if(campo.value == ""){
            campo.classList.add("inputError");
            validacionCorrecta = false;
        }else{
            campo.classList.remove("inputError");
        }
    });    

    if(inputContrasenna.value !== inputConfirmacion.value || inputContrasenna.value.length == 0){
        validacionCorrecta = false;
        inputContrasenna.classList.add('inputError');
        inputConfirmacion.classList.add('inputError');
    }else{
        inputContrasenna.classList.remove('inputError');
        inputConfirmacion.classList.remove('inputError');
    }
   
    if(validacionCorrecta == true){
        Swal.fire({
            "title": "Usuario registrado con éxito",
            "text": "Por favor revise su correo electrónico",
            "icon": "success"
        });
    }else{
        Swal.fire({
            "title": "Usuario no registrado",
            "text": "Por favor revise los campos resaltados",
            "icon": "warning"
        });
    }

};


btnRegistrar.addEventListener("click", validar);
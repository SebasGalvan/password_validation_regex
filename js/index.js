// Validador de contraseñas

const in_password =  document.querySelector('#password')
const  mayusculas =  document.querySelector('#mayusculas')
const  minusculas =  document.querySelector('#minusculas')
const  size =  document.querySelector('#size')
const  enviar =  document.querySelector('#enviar')
const  todoOK =  document.querySelector('.todoOK')
const  numero =  document.querySelector('#numero')
const resultado =  document.querySelector('.resultado')

enviar.setAttribute('disabled',true);

in_password.addEventListener('keyup', cambiar)

function cambiar(e) {

    const verificacion = [] 

    const letrasMayusculas= /[A-Z]/g
    const letrasMinusculas = /[a-z]/g
    const numeros = /[0-9]/g

    const conjunto = letrasMayusculas + letrasMinusculas + numero


    e.target.value.split("").forEach(l => {
        if(l.match(letrasMayusculas)){
            mayusculas.className = "listo"
            verificacion[3] = true
        }
        if(l.match(letrasMinusculas)){
            minusculas.className = "listo"
            verificacion[3] = true
        }
        if(l.match(numeros)){
            numero.className = "listo"
            verificacion[3] = true
        }
    });

    if(!e.target.value.match(conjunto)){

            if(!e.target.value.match(letrasMayusculas)){
                mayusculas.className = "falta"
                verificacion[0] = false
            }
            if(!e.target.value.match(letrasMinusculas)){
                minusculas.className = "falta"
                verificacion[1] = false
            }
            if(!e.target.value.match(numeros)){
                numero.className = "falta"
                verificacion[2] = false
            }
        };

        if(in_password.value.split("").length >= 8){
            size.className = "listo"
            verificacion[3] = true
        }else{
            size.className = "falta"
            verificacion[3] = false
        }

        if(verificacion.every((v)=> { return v == true})){
            todoOK.style = "visibility : visible"
            enviar.removeAttribute("disabled")

        }else{
            todoOK.style = "visibility : hidden"
            enviar.setAttribute('disabled','disabled');
        }
}

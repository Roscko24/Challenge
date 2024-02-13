var nuevoMensaje;

function asignarTextoElemento (elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function mensajeInicial() {
    asignarTextoElemento('h3', 'Ningun mensaje fue encontrado');
    asignarTextoElemento('p', 'Ingresa el texto que desees encriptar o desencriptar');
}

function validarMensaje() {
    let mensaje = document.getElementById('mensaje').value;
    var patron = /^[a-z0-9\u00F1\s]*$/;
        if(!patron.test(mensaje)){ 
            alert("Solo letras minusculas, sin acentos ni caracteres especiales");
        } else {
            encriptar();
            return;
        }
    return;
}

function encriptar() {
    let mensaje = document.getElementById('mensaje').value;
    const remplazo = {
        'a':'ai',
        'e':'enter',
        'i':'imes',
        'o':'ober',
        'u':'ufat'
    }
        var nuevoMensaje = mensaje.replace(/[aeiou]/g, m=> remplazo [m]);
        asignarTextoElemento('h2', '');
        asignarTextoElemento('p', '');
        document.getElementById('textomod').innerHTML = nuevoMensaje; 
        document.getElementById('mensaje').value = ""; 
        document.getElementById('copiar').removeAttribute('disabled');
        document.getElementById('copiar').classList.add('mostrar');
    return;
}

 
function desencriptar() {
    let mensaje = document.getElementById('mensaje').value;
    var nuevoMensaje = mensaje.replace(/enter/g,"e").replace(/ai/g,"a").replace(/imes/g,"i").replace(/ober/g,"o").replace(/ufat/g,"u");
    asignarTextoElemento('h2', '');
    asignarTextoElemento('p', '');
    document.getElementById('textomod').innerHTML = nuevoMensaje; 
    document.getElementById('mensaje').value = ""; 
    document.getElementById('copiar').removeAttribute('disabled');
    document.getElementById('copiar').classList.add('mostrar');
    // document.querySelector('copiar').classList.add('mostrar');
    return;    
}



function clikcCopiar() {

    const elemento = document.querySelector('.textomod');
    copiarPortapapeles(elemento);

function copiarPortapapeles() {
    const inputOculto = document.createElement('input');
    inputOculto.setAttribute('value', elemento.innerText);
    document.body.appendChild(inputOculto);
    inputOculto.select();
    document.execCommand('copy');
    document.body.removeChild(inputOculto);
}
}


mensajeInicial();
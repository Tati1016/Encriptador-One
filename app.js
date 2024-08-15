// Declaración de variables
const campoTexto = document.getElementById('textoIngresado');
const resultadoTexto = document.getElementById('textoAMostrar');
const mensajeCopiado = document.getElementById('mensaje-copiado');
const btnCopiar = document.getElementById('copiar');
const btnEncriptar = document.getElementById('encriptar');
const btnDesencriptar = document.getElementById('desencriptar');

const variablesEncriptador = {
    'e': 'enter',
    'i': 'imes',
    'a': 'ai',
    'o': 'ober',
    'u': 'ufat'
};

const variablesDesencriptador = {
    'enter': 'e',
    'imes': 'i',
    'ai': 'a',
    'ober': 'o',
    'ufat': 'u'
};

// Función para asignar texto a un elemento
function asignarTextoElemento(elemento, texto) {
    document.querySelector(elemento).innerHTML = texto;
}

// Habilita o deshabilita un textarea
function habilitarTextarea(textarea, habilitado) {
    document.querySelector(textarea).disabled = !habilitado;
}

// Muestra un mensaje si el campo está vacío
function campoVacio(funcion) {
    resultadoTexto.placeholder = `No ha ingresado texto para ${funcion}`;
}

// Habilita o deshabilita un botón
function habilitarBoton(boton, habilitado) {
    document.getElementById(boton).disabled = !habilitado;
}

// Verifica el texto ingresado para evitar mayúsculas o caracteres especiales
function verificarTexto(event) {
    const teclaPresionada = event.key;
    if (teclaPresionada in eliminarErroresInput) {
        event.preventDefault();
        campoTexto.value += eliminarErroresInput[teclaPresionada];
    }
}

// Función de encriptar
function encriptar() {
    const texto = campoTexto.value;
    if (!texto) {
        campoVacio('encriptar');
        return;
    }

    let textoEncriptado = '';
    for (const caracter of texto) {
        textoEncriptado += variablesEncriptador[caracter] || caracter;
    }

    asignarTextoElemento("#textoAMostrar", textoEncriptado);
    btnCopiar.textContent = 'Copiar texto encriptado';
    habilitarBoton('copiar', true);
    habilitarBoton('encriptar', false);
    habilitarBoton('desencriptar', false);
}

// Función de desencriptar
function desencriptar() {
    let texto = campoTexto.value;
    if (!texto) {
        campoVacio('desencriptar');
        return;
    }

    for (const llave in variablesDesencriptador) {
        texto = texto.replaceAll(llave, variablesDesencriptador[llave]);
    }

    asignarTextoElemento("#textoAMostrar", texto);
    btnCopiar.textContent = 'Copiar texto desencriptado';
    habilitarBoton('copiar', true);
    habilitarBoton('encriptar', false);
    habilitarBoton('desencriptar', false);
}

// Función para copiar texto al portapapeles
async function copiar() {
    try {
        const textoCopiado = resultadoTexto.textContent || resultadoTexto.value;
        await navigator.clipboard.writeText(textoCopiado);

        console.log('Contenido copiado al portapapeles');
        mensajeCopiado.style.display = 'block';
        setTimeout(() => mensajeCopiado.style.display = 'none', 1000);

        habilitarBoton('copiar', false);
        habilitarBoton('encriptar', true);
        habilitarBoton('desencriptar', true);
    } catch (err) {
        console.error('Error al copiar: ', err);
    }
}

// Foco en el campo de texto y restablecimiento de botones
function focusTextoIngresado() {
    campoTexto.focus();
    habilitarBoton('copiar', false);
    habilitarBoton('encriptar', true);
    habilitarBoton('desencriptar', true);
}

// Asignar eventos a los botones
campoTexto.addEventListener('focus', focusTextoIngresado);
campoTexto.addEventListener('keypress', verificarTexto);
btnEncriptar.addEventListener('click', encriptar);
btnDesencriptar.addEventListener('click', desencriptar);
btnCopiar.addEventListener('click', copiar);


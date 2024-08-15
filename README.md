# Encriptador-One
<h1 align="center"><em>Challenge Encriptador Alura</em></h1>

Encriptador y desencriptador de mensajes que cumple las siguientes condiciones:

La letra "a" es convertida para "ai"
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"

El cuerpo del proyecto se desarrolla utilizando un archivo HTML (index.html), los estilos se aplican a través de un archivo CSS (style.css), y las funcionalidades se implementan mediante un archivo JavaScript (app.js).

Header: Incluye el logo de Alura y un título que dice "Encriptador de texto".

Área de Texto:

Textarea 1: Aquí el usuario puede ingresar el texto que desea encriptar o desencriptar.
Textarea 2: Muestra el resultado del texto encriptado o desencriptado. Este campo es de solo lectura, por lo que no puede ser editado directamente por el usuario.
Botones:

Encriptar: Este botón ejecuta la función _encriptar_, que toma el texto del primer textarea, lo encripta y lo muestra en el segundo textarea.
Desencriptar: Este botón activa la función _desencriptar_, que desencripta el texto del primer textarea y lo muestra en el segundo textarea.
Resetear: Limpia el texto en ambos cuadro del encriptador
Copiar: Este botón llama a la función asincrónica _copiar_, que copia el contenido encriptado o desencriptado del segundo textarea al portapapeles.

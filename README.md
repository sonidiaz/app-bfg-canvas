
# App Canvas & Beforget Connect

Desarrollo de aplicación para mostrar y conectar el contenido que se genera en Canvas LMS y por medio de conexión OAUTH2 con los datos del usuario.

Para ver el proyecto primero clonar o descargar el repositorio.

    git clone https://github.com/sonidiaz/App-bfg-Canvas.git

Después

    cd App-bfg-Canvas
    npm install
 

Es necesario agregar un archivo llamado **config.js** en el directorio `src` ya que en algunos archivos hacemos uso de esas constantes para generar los path de las url's.


    export const CLIENT_CANVAS_TEST = '<CLIENT_CANVAS_TEST>';
    export const HOST = '<HOST>';
    export const HOST_API = '<HOST_API>';
    export const CLIENT_ID = '<CLIENT_ID>';


Una vez realizado esto levantamos el proyecto en modo desarrollo con el siguiente comando.

    npm start

`
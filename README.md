# ⌨ Websocket

Repositorio de un simulador de chat utilizado Websocket

## 📝 Detalle

Se utiliza Websocket (se emplea la biblioteca Socket.IO) para generar un canal de comunicación bidireccional entre el servidor y el cliente web. Esto nos
permite simular un chat en vivo a través de distintas sesiones de usuario. Los mensajes son almacenados en la misma memoria del servidor a través de SQLite y
en el caso de los productos se utiliza MariaDB

## ⌨🖱 Instalación

- Para correr la app puedes:

1. Clonar el repositorio y utilizarlo de manera local

   `git clone https://github.com/fedekrenn/socket.io.git`

2. Levantar un servidor SQL de manera local, en mi caso utilizo MySQL

3. En la ruta src/options/dbMariaDB.js configurarlo de acuerdo al puerto, usuario, pass, etc elegidos.

```
const optionsMdb = {
    client: 'mysql',
    connection: {
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: '',
        database: 'AQUI_EL_NOMBRE_DE_LA_DB'
    }
}
```

<br>

En el caso que no ejecutes un servidor SQL podrás gestionar los mensajes de chat pero no podrás ver ni añadir productos

4. Instalar las dependencias

   `npm install`

5. Levantar el servidor

    `npm start`

## 📚 Tecnologías utilizadas

- Node.js
- Express
- Socket.io
- MySQL
- Knex
- SQLite3



<br>

## 🙋‍♂️ Hola, Soy Federico Krenn

:nerd_face: Desarrollador web Fullstack
<br>
👨‍🎓 Realizando la Tecnicatura en Desarrollo Web en ISPC y Tecnicatura en Software Libre en la UNL
<br>
📫 Conectemos en Linkedin: https://www.linkedin.com/in/fkrenn/


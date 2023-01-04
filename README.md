# ⌨ Websocket

Repositorio de un simulador de chat utilizado Websocket

## 📝 Detalle
Se utiliza Websocket (se emplea la biblioteca Socket.IO) para generar un canal de comunicación bidireccional entre el servidor y el cliente web. Esto nos 
permite simular un chat en vivo a través de distintas sesiones de usuario. Los mensajes son almacenados en la misma memoria del servidor a través de SQLite y 
en el caso de los productos se utiliza MariaDB


## ⌨🖱 Instalación
- Para correr la app puedes:

1. Clonar el repositorio y utilizarlo de manera local

    `git clone https://github.com/fedekrenn/memory-game-JS.git`
    
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
        database: 'ecommerce'
    }
}
```
<br>

En el caso que no ejecutes un servidor SQL podrás gestionar los mensajes de chat pero no podrás ver ni añadir productos

<br>
<br>

<h2> 🙋‍♂️ Hola, Soy Federico Krenn</h2>
:nerd_face: Me encuentro cursando la carrera de fullstack developer en Coderhouse 
<br>
🌱 Actualmente estoy cursando Backend
<br></br>
📫 Conectemos en Linkedin: https://www.linkedin.com/in/fkrenn/

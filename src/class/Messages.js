const fs = require('fs');

class ContenedorMensajes {

    constructor(archivo) {
        this.archivo = archivo;
    }

    // Metodos para guardar y leer mensajes
    async save(obj) {
        try {
            const contenido = await fs.promises.readFile(this.archivo, 'utf-8');
            const data = JSON.parse(contenido);
            obj.id = data.length + 1;
            data.push(obj);

            await fs.promises.writeFile(this.archivo, JSON.stringify(data, null, 2));

            return obj.id;

        } catch (err) {
            console.log(err)
        }
    }

    async getAll() {
        try {
            const contenido = await fs.promises.readFile(this.archivo, 'utf-8');
            const data = JSON.parse(contenido);
            return data;
            
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = ContenedorMensajes;
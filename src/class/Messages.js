class ContenedorMensajes {

    constructor(knex, table) {
        this.knex = knex;
        this.table = table;
    }

    // Metodos 

    async createTable() {
        try {
            await this.knex.schema.hasTable(this.table)
                .then(async (exists) => {
                    if (!exists) {
                        await this.knex.schema.createTable(this.table, (table) => {
                            table.increments('id').primary();
                            table.string('color')
                            table.string('email').notNullable();
                            table.string('message').notNullable();
                            table.string('date').notNullable();

                            console.log('Tabla de mensajes creada');
                        });
                    }
                });
        } catch (error) {
            console.log(error);
        }
    }

    async save(msj) {
        try {
            await this.knex(this.table).insert(msj);
            console.log('Mensaje guardado');
            return { message: "Se guardó correctamente el mensaje" };


        } catch (err) {
            console.log(err)
        }
    }

    async getAll() {
        try {
            const mensajes = await this.knex(this.table).select();

            return mensajes;
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = ContenedorMensajes;
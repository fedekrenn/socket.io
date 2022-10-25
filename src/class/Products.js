class ContenedorProductos {

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
                            table.string('title').notNullable();
                            table.integer('price').notNullable();
                            table.string('thumbnail');

                            console.log('Tabla creada');
                        });
                    }
                });
        } catch (error) {
            console.log(error);
        }
    }

    async save(objeto) {
        try {
            await this.knex(this.table).insert(objeto);
            console.log('Producto guardado');
            return { message: "Se guardó correctamente el objeto" };
        } catch (err) {
            console.log(err)
        }
    }

    async getById(id) {
        try {
            const product = await this.knex(this.table).where({ id: id }).first();
            return product;
        } catch (error) {
            console.log(error);
        }
    }

    async getAll() {
        try {
            const products = await this.knex(this.table).select();

            return products;
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = ContenedorProductos;
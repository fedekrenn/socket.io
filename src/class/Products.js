class ContenedorProductos {
  constructor(knex, table) {
    this.knex = knex;
    this.table = table;
  }

  async createTable() {
    try {
      await this.knex.schema.hasTable(this.table).then(async (exists) => {
        if (!exists) {
          await this.knex.schema.createTable(this.table, (table) => {
            table.increments("id").primary();
            table.string("title").notNullable();
            table.integer("price").notNullable();
            table.string("thumbnail");

            console.log("Tabla creada");
          });
        }
      });
    } catch (error) {
      return { error: error };
    }
  }

  async save(objeto) {
    try {
      await this.knex(this.table).insert(objeto);
      console.log("Producto guardado");
      return { message: "Se guardó correctamente el objeto" };
    } catch (err) {
      return { error: err };
    }
  }

  async getAll() {
    try {
      const products = await this.knex(this.table).select();

      return products;
    } catch (error) {
      return {
        error:
          "Cuidado! Tienes que tener levantada de manera local un servidor de MySQL para que funcione",
      };
    }
  }
}

module.exports = ContenedorProductos;

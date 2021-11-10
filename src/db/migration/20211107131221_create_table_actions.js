const tableName = "actions";
exports.up = async function(knex) {
  if (!(await knex.schema.hasTable(tableName))) {
		await knex.schema.createTable(`${tableName}`, (table) => {
      table.uuid("web_id").notNullable().references("webs.id");

      table.enum("type", ["login", "logout", "posting", "get_forum"]).notNullable();

      table.integer("order_number").notNullable();

			table.string("tag").nullable();
			table.string("text").nullable();

      table.enum("action", ["click", "input", "find"])
      table.enum("input", ["username", "password", "title", "content"]);
      table.integer("number").nullable();

      table.jsonb("attributes").defaultTo({});

      table.jsonb("ancestors").defaultTo([]);

			table.timestamp("created_at").notNullable().defaultTo(knex.fn.now());
			table.timestamp("updated_at").notNullable().defaultTo(knex.fn.now());

		});
	}
};

exports.down = async function(knex) {
  if (await knex.schema.hasTable(tableName)) {
    await knex.schema.dropTableIfExists(tableName);
  }
};

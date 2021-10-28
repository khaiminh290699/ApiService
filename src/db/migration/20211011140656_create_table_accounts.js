const tableName = "accounts";
exports.up = async function(knex) {
  if (!(await knex.schema.hasTable(tableName))) {
		await knex.schema.createTable(`${tableName}`, (table) => {
			table.uuid("id").primary().defaultTo(knex.raw(`uuid_generate_v4()`));
			table.string("username").notNullable();
      table.string("password").notNullable();
			table.uuid("web_id").references("webs.id");
			table.uuid("user_id").notNullable().references("users.id");

			table.boolean("disable").defaultTo(false)

			table.unique(["user_id", "web_id", "username"]);

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

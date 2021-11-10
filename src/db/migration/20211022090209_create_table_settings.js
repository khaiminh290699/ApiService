const tableName = "settings";
exports.up = async function(knex) {
  if (!(await knex.schema.hasTable(tableName))) {
		await knex.schema.createTable(`${tableName}`, (table) => {
			table.uuid("id").primary().defaultTo(knex.raw(`uuid_generate_v4()`));
      table.uuid("post_id").notNullable().references("posts.id");
			table.uuid("account_id").notNullable().references("accounts.id");

			// table.enum("create_type", ["create_only", "create_and_post"]).notNullable();
			// table.string("timer_setting").notNullable();

			table.boolean("is_create_only").defaultTo(false)

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

const tableName = "forums";
exports.up = async function(knex) {
  if (!(await knex.schema.hasTable(tableName))) {
		await knex.schema.createTable(`${tableName}`, (table) => {
			table.uuid("id").primary().defaultTo(knex.raw(`uuid_generate_v4()`));
			table.uuid("web_id").notNullable().references("webs.id");
		
      table.string("forum_name").notNullable();
      table.string("forum_url").nullable().unique();

			table.boolean("is_deleted").defaultTo(false);

			table.unique(["web_id", "forum_name"])


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

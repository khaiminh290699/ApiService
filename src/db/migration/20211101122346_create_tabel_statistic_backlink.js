const tableName = "statistic_backlink"
exports.up = async function(knex) {
  
  if (!(await knex.schema.hasTable(tableName))) {
		await knex.schema.createTable(`${tableName}`, (table) => {
			table.uuid("id").primary().defaultTo(knex.raw(`uuid_generate_v4()`));

      table.uuid("backlink_id").notNullable().references("backlinks.id");

      table.uuid("account_id").notNullable().references("accounts.id");
      table.uuid("forum_id").notNullable().references("forums.id");
      
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
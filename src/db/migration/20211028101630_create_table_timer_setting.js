const tableName = "timer_setting"
exports.up = async function(knex) {
  
  if (!(await knex.schema.hasTable(tableName))) {
		await knex.schema.createTable(`${tableName}`, (table) => {
			table.uuid("id").primary().defaultTo(knex.raw(`uuid_generate_v4()`));
      table.uuid("setting_id").notNullable().references("settings.id");
      table.uuid("forum_id").notNullable().references("forums.id");

      table.string("timer_at").nullable();
      table.timestamp("from_date").nullable();
      table.timestamp("to_date").nullable();

      table.boolean("is_deleted").defaultTo(false);
      
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

const tableName = "posting_status";
exports.up = async function(knex) {
  if (!(await knex.schema.hasTable(tableName))) {
		await knex.schema.createTable(`${tableName}`, (table) => {
			table.uuid("id").primary().defaultTo(knex.raw(`uuid_generate_v4()`));
      table.uuid("progressing_id").nullable().references("progressings.id");
      table.uuid("setting_id").notNullable().references("settings.id");
      table.uuid("forum_id").notNullable().references("forums.id");

      table.enum("posting_type", ["create_post", "timer_post"]).defaultTo("create_post");
      table.enum("status", ["success", "fail", "waiting"]).notNullable().defaultTo("waiting");
      table.string("message").nullable();

      
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

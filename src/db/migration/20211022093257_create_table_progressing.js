const tableName = "progressings";
exports.up = async function(knex) {
  if (!(await knex.schema.hasTable(tableName))) {
		await knex.schema.createTable(`${tableName}`, (table) => {
			table.uuid("id").primary().defaultTo(knex.raw(`uuid_generate_v4()`));
      table.uuid("post_id").nullable().references("posts.id");

      table.string("type").notNullable().defaultTo("posting")
      table.specificType("progressing_amount", "double precision").notNullable();
      table.specificType("progressing_total", "double precision").notNullable();
      table.enum("status", ["success", "fail", "waiting", "progressing", "removed" ]).notNullable().defaultTo("waiting");
      
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

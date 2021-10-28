const bcryptjs = require("bcryptjs");

const tableName = "users";
exports.up = async function(knex) {
  if (!(await knex.schema.hasTable(tableName))) {
		await knex.schema.createTable(`${tableName}`, (table) => {
			table.uuid("id").primary().defaultTo(knex.raw(`uuid_generate_v4()`));

      table.string("username").notNullable().unique();
      table.string("password").notNullable();
      table.integer("permission").defaultTo(128);
      table.boolean("is_activated").defaultTo(false);
      
			table.timestamp("created_at").notNullable().defaultTo(knex.fn.now());
			table.timestamp("updated_at").notNullable().defaultTo(knex.fn.now());

		});

    await knex.insert({
      username: "khaiminh",
      password: bcryptjs.hashSync("khaiminh2906", 10),
      permission: 256,
      is_activated: true
    }).into(tableName);
	}
};

exports.down = async function(knex) {
  if (await knex.schema.hasTable(tableName)) {
    await knex.schema.dropTableIfExists(tableName);
  }
};

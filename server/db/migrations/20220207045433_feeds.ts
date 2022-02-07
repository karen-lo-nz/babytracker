import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {

  await knex.schema.createTable('feeds', function (table) {
  table.increments('id');
  table.integer('time')
  table.integer('pumped');
  table.integer('bottleFeedAmount');
  table.integer('feedingDuration');
})
}

export async function down(knex: Knex): Promise<void> {
  knex.schema.dropTable('feeds')
}


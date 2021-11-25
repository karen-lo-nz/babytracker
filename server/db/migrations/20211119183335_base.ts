import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.schema.createSchema("baby_tracker")

    await knex.schema.createTable('users', function (table) {
        table.increments();
        table.string('name');
        table.timestamps();
    })
}


export async function down(knex: Knex): Promise<void> {
}


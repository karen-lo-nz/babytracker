import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("feeds").del();

    // Inserts seed entries
    await knex("feeds").insert([
      { id: 1, time: "12:30am", pumped: 170, bottleFeedAmount: 150, feedingDuration: 0},
      { id: 2, time: "7:30am", pumped: 0, bottleFeedAmount: 0, feedingDuration: 10},
      { id: 3, time: "9:30am", pumped: 150, bottleFeedAmount: 120, feedingDuration: 5}
    ]);
};

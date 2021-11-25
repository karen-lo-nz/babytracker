import { Knex } from "knex";
import { User } from "../models/user";


export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("users").del();

    // Inserts seed entries
    await knex<User>("users").insert([
        { name: "test",created_at : '2021-01-12'},
        { name: "bob"},
        { name: "chicken" }
    ]);
};

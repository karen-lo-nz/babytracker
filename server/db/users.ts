import connection from './connection'
import { User } from './models/user'

export const getUsers = async (db = connection) => {
    // return await knex.select("*").from<User>("users")
    return await db<User>("users").select()
}

export const getUser = async (id: number, knex = connection) => {
    return await knex.select("*").from<User>("users").where("id", id)
}
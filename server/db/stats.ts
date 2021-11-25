import connection from './connection'
import { User } from './models/user'

export const getStats = async (db = connection) => {
    // return await knex.select("*").from<User>("users")
    return await db<Stats>("stats").select()
}

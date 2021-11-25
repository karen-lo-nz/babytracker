import connection from './connection'
import { Stats } from './models/stats'

export const getStats = async (db = connection) => {
    // return await knex.select("*").from<User>("users")
    return await db<Stats>("stats").select()
}

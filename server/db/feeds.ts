import connection from './connection'
import { Feeds } from './models/feeds'

export const getFeeds = async (db = connection) => {
    // return await knex.select("*").from<User>("users")
    return await db<Feeds>("feeds").select()
}


import connection from './connection'
import { Feeds } from './models/feeds'

export const getFeeds = async (db = connection) => {
    return await db<Feeds>("feeds").select()
}

export const addFeed = async (feed:Feeds, db = connection) => {
  console.log(feed)
  return await db<Feeds>("feeds")
    .insert(feed)
    // .then( () => {
    //   return getFeeds()
    // })
}


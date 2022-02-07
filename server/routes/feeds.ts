import express from "express"
import * as feeds from "../db/feeds"

const router = express.Router()

router.get('/', async (req, res) => {
    const allFeed = await feeds.getFeeds();

    return res.json(allFeed)
})


export default router
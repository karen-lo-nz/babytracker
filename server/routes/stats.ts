import express from "express"
import * as statsDb from "../db/stats"

const router = express.Router()

router.get('/', async (req, res) => {
    const stats = await statsDb.getStats();

    return res.json(stats)
})



export default router
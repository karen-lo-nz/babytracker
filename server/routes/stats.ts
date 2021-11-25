import express from "express"
import * as statsDb from "../db/stats"

const router = express.Router()

router.get('/', async (req, res) => {
    const users = await statsDb.getStats();

    return res.json(users)
})



export default router
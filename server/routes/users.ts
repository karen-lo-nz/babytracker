import express from "express"
import * as usersDb from "../db/users"

const router = express.Router()

router.get('/', async (req, res) => {
    const users = await usersDb.getUsers();

    return res.json(users)
})

router.get('/:id', async (req, res) => {
    const userId = parseInt(req.params.id)
    const user = await usersDb.getUser(userId);

    return res.json(user)
})

export default router
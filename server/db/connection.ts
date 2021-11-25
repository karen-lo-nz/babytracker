import knex from "knex"
import config from "../knexfile"

type ConfigOptions = "production" | "development"

const env = process.env.NODE_ENV as ConfigOptions || 'development'

export default knex(config[env])

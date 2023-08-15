import 'reflect-metadata'
import { DataSource } from 'typeorm'
import { SearchRecord } from './entities/SearchRecord.js'
import config from '../config/config.js'

export const AppDataSource = new DataSource({
    type: 'mysql',
    host: config.dbHost,
    port: +config.dbPort,
    username: config.dbUser,
    password: config.dbPassword,
    database: config.dbDatabase,
    synchronize: true,
    logging: false,
    entities: [SearchRecord],
    migrations: [],
    subscribers: [],
})

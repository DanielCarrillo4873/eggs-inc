import { createPool } from 'mariadb';
import { DB_HOST, DB_USERNAME, DB_PASSWORD, DB_NAME } from './settings.js';

const pool = createPool({
    host: DB_HOST,
    user: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_NAME,
    connectionLimit: 20,
});

export default pool;

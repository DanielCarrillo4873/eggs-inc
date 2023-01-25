import server from './server.js';
import database from './database.js';
import {PORT} from './settings.js';

export default async function main() {
    try {
        const conn = await database.getConnection();
        await conn.ping()
        console.log('Database connected');
        server.listen(PORT, () => {
            conn.release();
            console.log(`Server running on port ${PORT}`);
        })
    } catch (e) {
        console.error('not connected');
        process.exit(1);
    }
}
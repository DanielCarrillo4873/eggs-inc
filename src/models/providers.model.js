import database from '../database.js';
export async function getProviderById(id) {
    const conn = await database.getConnection();
    const res = await conn.query('SELECT * FROM provider WHERE provider_id=?', [id]);
    await conn.release();
    return res[0];
}

export async function getAllProviders() {
    const conn = await database.getConnection();
    const providers = await conn.query('SELECT * FROM provider;');
    await conn.release();
    return providers;
}

export async function createProvider(name, address, email, phone) {
    const conn = await database.getConnection();
    const res = await conn.query(
        'INSERT INTO provider (name, address, email, phone) VALUES (?, ?, ?, ?)',
        [name, address, email, phone]);
    await conn.release();
    return Number(res.insertId);
}

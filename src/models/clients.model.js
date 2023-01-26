import database from '../database.js';

export async function getClientById(id) {
    const conn = await database.getConnection();
    const client = await conn.query('SELECT * FROM client WHERE client_id=?', [id]);
    await conn.release();
    return client[0];
}

export async function getAllClients() {
    const conn = await database.getConnection();
    const clients = conn.query('SELECT * FROM client;');
    await conn.release();
    return clients;
}

export async function createClient(name, lastname, email, phone, address, birthdate) {
    const conn = await database.getConnection();
    const res = await conn.query(
        'INSERT INTO client (name, lastname, email, phone, address, birthdate) VALUES (?, ?, ?, ?, ?, ?)',
        [name, lastname, email, phone, address, birthdate],
    );
    await conn.release();
    return Number(res.insertId);
}
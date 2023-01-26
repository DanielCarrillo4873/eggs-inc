import { getClientById, getAllClients, createClient } from '../models/clients.model.js';
import { serverInternalError } from '../response-errors.js';

export async function getOneClientController(req, res) {
    try {
        const client = await getClientById(req.params.id);
        res.json(client);
    } catch (e) {
        res.status(500).json(serverInternalError);
    }
}

export async function getAllClientsController(req, res) {
    try {
        const clients = await getAllClients();
        res.json(clients);
    } catch (e) {
        res.status(500).json(serverInternalError);
    }
}

export async function createClientController(req, res) {
    try {
        const id = await createClient(
            req.body.name,
            req.body.lastname,
            req.body.email,
            req.body.phone,
            req.body.address,
            req.body.birthdate,
        );
        res.status(201).json({ id });
    } catch (e) {
        res.status(500).json(serverInternalError);
    }
}

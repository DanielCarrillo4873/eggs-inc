import { getProviderById, getAllProviders, createProvider } from '../models/providers.model.js';
import { serverInternalError } from '../response-errors.js';

export async function getOneProviderController(req, res) {
    try {
        const provider = await getProviderById(req.params.id);
        res.json(provider);
    } catch (e) {
        res.status(500).json(serverInternalError);
    }
}

export async function getAllProviderController(req, res) {
    try {
        const providers = await getAllProviders();
        res.json(providers);
    } catch (e) {
        res.status(500).json(serverInternalError);
    }
}

export async function createProviderController(req, res) {
    try {
        const id = await createProvider(
            req.body.name,
            req.body.address,
            req.body.email,
            req.body.phone,
        );
        res.status(201).json({ id });
    } catch (e) {
        res.status(500).json(serverInternalError);
    }
}

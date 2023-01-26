import { Router } from 'express';
import { getOneClientController, getAllClientsController, createClientController } from '../controllers/clients.controller.js';

const router = Router();

router.get('/:id', getOneClientController);
router.get('/', getAllClientsController);
router.post('/', createClientController);

export default router;

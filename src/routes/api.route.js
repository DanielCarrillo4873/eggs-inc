import { Router } from 'express';
import { apiInfoController } from '../controllers/api.controller.js';
import clientsRoute from './clients.route.js';
import providersRoute from './providers.route.js';

const router = Router();

router.get('/', apiInfoController);
router.use('/clients', clientsRoute);
router.use('/providers', providersRoute);

export default router;

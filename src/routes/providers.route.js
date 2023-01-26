import {
    getOneProviderController,
    getAllProviderController,
    createProviderController,
} from '../controllers/providers.controller.js';
import {Router} from 'express';

const router = Router();

router.get('/:id', getOneProviderController);
router.get('/', getAllProviderController);
router.post('/', createProviderController);

export default router;

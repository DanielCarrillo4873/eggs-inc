import { Router } from 'express';
import {apiInfoController} from '../controllers/api.controller.js';

const router = Router();

router.get('/', apiInfoController);
export default router;

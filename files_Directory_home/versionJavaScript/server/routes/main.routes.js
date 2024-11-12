import { Router } from 'express';
import {
    getHTMLIndex,
    getIndexJs,
    getIndexCss
} from '../controllers/main.controller.js';

const router = Router();

router.get('/', getHTMLIndex);

router.get('/scripts/index.js', getIndexJs);

router.get('/styles/index.css', getIndexCss);

export default router;
import express from 'express';
import { createMenu, getAllMenus } from '../controllers/menu.controller.js';

const router = express.Router();

router.post('/', createMenu);
router.get('/', getAllMenus);

export default router;

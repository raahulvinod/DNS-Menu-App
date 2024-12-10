import express from 'express';
import {
  addItemToMenu,
  createMenu,
  getAllMenus,
} from '../controllers/menu.controller.js';

const router = express.Router();

router.post('/', createMenu);
router.get('/', getAllMenus);
router.put('/:id', addItemToMenu);

export default router;

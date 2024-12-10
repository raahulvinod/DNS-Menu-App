import express from 'express';
import {
  addItemToMenu,
  createMenu,
  getAllMenus,
  getAMenu,
} from '../controllers/menu.controller.js';

const router = express.Router();

router.post('/', createMenu);
router.get('/', getAllMenus);
router.put('/:id', addItemToMenu);
router.get('/:id', getAMenu);

export default router;

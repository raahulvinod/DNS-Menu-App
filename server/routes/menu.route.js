import express from 'express';
import { createMenu } from '../controllers/menu.controller.js';

const router = express.Router();

router.post('/', createMenu);

export default router;

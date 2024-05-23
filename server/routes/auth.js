import express from 'express';
import db from '../database/connection.js';
import { ObjectId } from 'mongodb';
import { signup } from '../controllers/auth.controller.js';

const router = express.Router();

router.get('/', async (_, res) => {
  return res.send('Not found').status(404);
});
router.post('/signup', signup);

export default router;

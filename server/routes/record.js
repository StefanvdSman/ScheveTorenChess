import express, { query } from 'express';
import db from '../database/connection.js';
import { ObjectId } from 'mongodb';
import { configDotenv } from 'dotenv';

const router = express.Router();

router.get('/', async (_, res) => {
  let collection = await db.collection('records');
  let results = await collection.find({}).toArray();
  res.send(results).status(200);
});

router.get('/:id', async (req, res) => {
  let collection = await db.collection('records');
  let query = { _id: ObjectId(req.params.id) };
  let results = await collection.findOne(query);

  if (!results) res.send('Not found').status(404);
  else res.send(results).status(200);
});

router.post('/', async (req, res) => {
  try {
    let newDocument = {
      name: req.body.name,
      position: req.body.position,
      level: req.body.level,
    };

    let collection = await db.collection('records');
    let results = await collection.insertOne(newDocument);
    res.send(results).status(204);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error adding record');
  }
});

router.patch('/:id', async (req, res) => {
  try {
    const query = { _id: ObjectId(req.params.id) };
    const updates = {
      $set: {
        name: req.body.name,
        position: req.body.position,
        level: req.body.level,
      },
    };
    let collection = await db.collection('records');
    let results = await collection.updateOne(query, updates);
    res.send(results).status(200);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error updating record');
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const query = { _id: ObjectId(req.params.id) };
    const collection = db.collection('records');
    let results = await collection.deleteOne(query);
    res.send(results).status(200);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error deleting record');
  }
});

export default router;

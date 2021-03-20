import express from 'express';
import Charities from '../models/charity.js';
const router = express.Router()

// Getting all
router.get('/', async (req, res) => {
  Charities.find()
    .then((result) => {
      res.json(result)
    })
    .catch((error) => {
      console.log(error)
    })
})

// Getting One
router.get('/:id', (req, res) => {
  var queryTerm = req.params.id;
  Charities.find({description: new RegExp(queryTerm, 'i')})
    .then((result) => {
      res.json(result)
    })
    .catch((error) => {
      console.log(error)
    })
})

export default router
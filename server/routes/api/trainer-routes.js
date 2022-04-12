const router = require('express').Router();

const {
  getAllTrainer,
  getTrainerById,
  createTrainer,
  updateTrainer,
  deleteTrainer
} = require('../../controllers/trainer-controller');


// Set up GET all and POST at /api/trainers
router
.route('/')
.get(getAllTrainer)
.post(createTrainer);

// Set up GET one, PUT, and DELETE at /api/trainers/:id
router
.route('/:id')
.get(getTrainerById)
.put(updateTrainer)
.delete(deleteTrainer);

module.exports = router;
const router = require('express').Router();
const userRoutes = require('./user-routes');
const trainerRoutes = require('./trainer-routes');

router.use('/trainers', trainerRoutes);
router.use('/users', userRoutes);

module.exports = router;

const express = require('express');
const tripController = require('../controllers/tripController');

const router = express.Router();

router.get('/create', tripController.trip_create_get);
router.get('/', tripController.trip_index);
router.post('/', tripController.trip_create_post);
router.get('/:id', tripController.trip_details);

module.exports = router;
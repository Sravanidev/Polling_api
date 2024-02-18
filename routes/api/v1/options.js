const express = require('express');
const router = express.Router();
const optionsController = require('../../../controllers/api/v1/option_controller');

router.post('/:id/create', optionsController.create);
router.get('/:id/add_vote', optionsController.addVote);
router.delete('/:id/delete', optionsController.delete);

module.exports = router;

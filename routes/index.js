const router = require('express').Router();
const person = require('../controllers/person');

router.get('/:id', person.getPerson);

module.exports = router;
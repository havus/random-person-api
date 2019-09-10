const router = require('express').Router();
const person = include('controllers/person');

router.get('/:id', person.getAllPerson);

module.exports = router;
const express = require('express');
const { createList, getLists, updateStatus } = require('./list.controller');
const validateListSchema = require('../../validators/validator');

const router = express.Router();
router.use(express.json());

router.post('/create',validateListSchema,createList);
router.get('/getDetails/:id',getLists);
router.patch('/updateDetails/:id',updateStatus)

module.exports = router;
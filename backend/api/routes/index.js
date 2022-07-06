const express = require("express");
const PropertiesRouter = require("./properties");
const router = express.Router();
const UsersRouter = require('./users');

router.use('/users', UsersRouter);
router.use('/properties', PropertiesRouter);

module.exports = router;
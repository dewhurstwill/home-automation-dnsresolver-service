const express = require('express');
const info = require('./info');
const health = require('./health');
const resolveDomain = require('./resolve');

const router = express.Router();

router.use('/', info);
router.use('/health', health);
router.use('/dns/resolve/', resolveDomain);

module.exports = router;

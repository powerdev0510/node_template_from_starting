const express = require('express');
const router = express.Router();

router.get('/bot', function(req, res, next) {
    return res.send("1");
});
module.exports = router;
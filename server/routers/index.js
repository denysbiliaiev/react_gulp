var express = require('express');

var router = express.Router();

router.get('/', function(req, res) {
    res.json({hello:"wosadrld"});
});

router.get('/test', function(req, res) {
    res.json({hello:"wosadrld"});
});

module.exports = router;
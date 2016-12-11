var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('badges:1,location:5,review:2');
});

module.exports = router;

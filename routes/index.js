var express = require('express');
const getObject = require('../controllers/fileCtrl');
var router = express.Router();

router.get("/healthz", function(req, res){
  res.status(200).send("OK")
})

router.all("*", getObject)

module.exports = router;

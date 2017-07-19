var express = require("express");
var router = express.Router();



//Landing Page
router.get('/', function (req, res) {
    res.render("landing.ejs");
});

module.exports = router;
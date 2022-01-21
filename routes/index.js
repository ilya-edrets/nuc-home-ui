var express = require("express");
var router = express.Router();

const nucServices = [
    { name: "Transmission", url: "http://nuc:9091" },
    { name: "Portainer", url: "http://nuc:9000" },
    { name: "Grafana", url: "http://nuc:3000" },
];

/* GET home page. */
router.get("/", function (req, res, next) {
    res.render("index", { title: "NUC Home Page", services: nucServices });
});

module.exports = router;

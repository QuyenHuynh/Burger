var express = require('express');
var router = express.Router();
var burger = require("../models/burger.js");

router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        res.render("index", {burgers: data});
    });
});

router.post("/", function (req, res) {
    burger.insertOne(req.body.burger_name, function () {
        res.redirect("/");
    });
});

router.put("/api/burgers/:id", function (req, res) {
    var id = req.params.id;
    burger.updateOne(id, function () {
        res.redirect("/");
    });
});

// router.delete("/api/burgers/:id"), function (req, res){
//     var id = req.params.id;
//     burger.deleteOne(id, function(){
//         res.redirect("/");
//     })
// };

module.exports = router;
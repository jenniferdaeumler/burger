// Create the `router` for the app, and export the `router` at the end of your file.
const express = require("express");
const router = express.Router();
const burger = require("../models/burger.js")


//router.get router.post 
router.get("/", function(req, res){
    burger.all(function(data){
        const hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

module.exports = router;
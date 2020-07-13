// Create the `router` for the app, and export the `router` at the end of your file.
const express = require("express");
const router = express.Router();
const burger = require("../models/burger.js")


//Routers
//Get route to display all burgers
router.get("/", function(req, res){
    burger.selectAll(function(data){
        const hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

//Post route to display new burger submitted via form
router.post("/api/burgers", function(req, res) {
    burger.insertOne([
      "burger_name"
    ], [
      req.body.burger_name
    ], function(result) {
      // Send back the ID of the new burger
      res.json({ id: result.insertId });
    });
  });

//Put route to display updated "devoured" burgers
router.put("/api/burgers/:id", function(req, res) {
    const condition = "id = " + req.params.id;
  
    console.log("condition", condition);
  
    burger.updateOne({
      devoured: req.body.devoured
    }, condition, function(result) {
      if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });


module.exports = router;
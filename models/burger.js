const orm = require("./config/orm.js");

//FIX CAPITALIZED 
orm.selectAll("burgers");

orm.insertOne("burgers", "burger_name", "devoured", "BURGER_NAME", "DEVOURED");

orm.updateOne("burgers", "BURGER_NAME", "ID");

module.exports = burger.js;
const express = require("express");
const exphbs = require("express-handlebars");
const connection = require("./config/connection");
const app = express();


app.use(express.static("public"));
// process.env.PORT lets the port be set by Heroku
const PORT = process.env.PORT || 8080;

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.get("/", function(req, res){
  connection.query("SELECT * FROM burgers", function (err, data){
    if (err){
      return res.status(500).end();
    }
    res.render("index", {burgers: data});
  })
});

  // Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });
  
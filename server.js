const express = require("express");
// process.env.PORT lets the port be set by Heroku
const PORT = process.env.PORT || 8080;

const connection = require("./config/connection");

const app = express();

// Serve static content for the app from the "public" directory in the application directory.

app.use(express.static("public"));

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars.
const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// app.get("/", function(req, res){
//   connection.query("SELECT * FROM burgers", function (err, data){
//     if (err){
//       return res.status(500).end();
//     }
//     res.render("index", {burgers: data});
//   })
// });


// Import routes and give the server access to them.
const routes = require("./controllers/burgers_controller.js");

app.use(routes);

  // Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });
  
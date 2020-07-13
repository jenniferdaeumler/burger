const connection = require("./connection.js");


const orm = {
  selectAll: function(tableInput,cb) {
    const queryString = "SELECT * FROM ??";
    connection.query(queryString, [tableInput], function(err, result) {
      if (err) throw err;
      cb(result);
    });
  },
  insertOne: function(table, col, val, cb) {
    const queryString = "INSERT INTO "+table + " ("+col.toString()+") VALUES (?)";
    console.log(queryString);
    connection.query(queryString, val, function(err, result) {
      if (err) throw err;
      cb(result);
    });
  },
  updateOne: function(table, valOne, valTwo,cb) {
    const queryString =
      "UPDATE ?? SET (devoured) WHERE id = ?";
    connection.query(
      queryString,
      [table, valOne, valTwo],
      function(err, result) {
        if (err) throw err;
        cb(result);
      }
    );
  }
};

module.exports = orm;
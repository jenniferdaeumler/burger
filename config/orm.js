const connection = require("./connection.js");

const orm = {
  selectAll: function(tableInput,cb) {
    const queryString = "SELECT * FROM ??";
    connection.query(queryString, [tableInput], function(err, result) {
      if (err) throw err;
      console.log(result);
    });
  },
  insertOne: function(table, nameOfCol, valOfCol,cb) {
    const queryString = "INSERT INTO ?? (?, ?) VALUES (?, ?)";
    console.log(queryString);
    connection.query(queryString, [table, nameOfCol, valOfCol], function(err, result) {
      if (err) throw err;
      console.log(result);
    });
  },
  updateOne: function(table, valOfCol,cb) {
    const queryString =
      "UPDATE ?? SET burger = ? WHERE id = ?";
    connection.query(
      queryString,
      [table, valOfCol, valOfCol],
      function(err, result) {
        if (err) throw err;
        console.log(result);
      }
    );
  }
};

module.exports = orm;
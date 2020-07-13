const connection = require("./connection.js");

const orm = {
  selectAll: function(tableInput,cb) {
    const queryString = "SELECT * FROM ??";
    connection.query(queryString, [tableInput], function(err, result) {
      if (err) throw err;
      cb(result);
    });
  },
  insertOne: function(table, nameOfCol, valOfCol,cb) {
    const queryString = "INSERT INTO ?? (?, ?) VALUES (?, ?)";
    console.log(queryString);
    connection.query(queryString, [table, nameOfCol, valOfCol], function(err, result) {
      if (err) throw err;
      cb(result);
    });
  },
  updateOne: function(table, valOfColOne, valOfColTwo,cb) {
    const queryString =
      "UPDATE ?? SET burger = ? WHERE id = ?";
    connection.query(
      queryString,
      [table, valOfColOne, valOfColTwo],
      function(err, result) {
        if (err) throw err;
        cb(result);
      }
    );
  }
};

module.exports = orm;
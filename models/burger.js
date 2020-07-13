const orm = require("../config/orm.js");

const burger = {
//FIX CAPITALIZED 
all: function(cb) {
orm.selectAll("burgers", function(res){
    cb(res);
});
},

insertOne: function(nameOfCol, valOfCal, cb) {
    orm.insertOne("burgers", nameofCal, valOfCal, function(res){
        cb(res);
    });
    },

updateOne:function(valOfColOne, valOfColTwo,cb) {
    orm.updateOne("burgers", valOfColOne, valOfColTwo, function(res){
        cb(res);
    });
    },

};

module.exports = burger;
const orm = require("../config/orm.js");

const burger = {

selectAll: function(cb) {
orm.selectAll("burgers", function(res){
    cb(res);
});
},

insertOne: function(nameOfCol, valOfCol, cb) {
    orm.insertOne("burgers", nameOfCol, valOfCol, function(res){
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
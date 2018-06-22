var friends = require("../app/data/friends"); // links our route which holds arrays of info

module.exports = function(app){
    //the following is going to deal with what users see when they visit a page where they are shown a JSON of the table data
    app.get("/api/friends", function(req,res){
        res.json(friends);
    });

    app.post("/api/friends", function(req,res){
    });

}




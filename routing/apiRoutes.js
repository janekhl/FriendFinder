var friends = require("../app/data/friends"); // links our route which holds arrays of info

module.exports = function(app){
    //the following is going to deal with what users see when they visit a page where they are shown a JSON of the table data
    app.get("/api/friends", function(req,res){
        res.json(friends);
    });

    app.post("/api/friends", function(req,res){
        console.log(req.body.scores);
        var user = req.body;
        var match = friendsArray[friendIndex];
        var friendIndex=0; //so the first guy is default match
        var maxDif = 40; //5-1 *10

        for (var i=0; i<user.scores.length;i++){
            user.scores[i] = parseInt(user.scores[i]);
        }


        for (var i=0;i<friendsArray.length;i++){
            var scoreDifference=0;//setting difference low and unatainable so we have something to go off of
            for (var j = 0; j<friendsArray[i].scores.length; j++){
                var dif= Math.abs(user.scores[j]-friends[i].scores[j]);
                scoreDifference+=difference;
            }
            if(scoreDifference<maxDif){
                friendIndex=i;
                maxDif=scoreDifference;
            }
        }
        res.json(match);

    });

}




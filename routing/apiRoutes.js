var friends = require("../app/data/friends"); // links our route which holds arrays of info

module.exports = function(app){
    //the following is going to deal with what users see when they visit a page where they are shown a JSON of the table data
    app.get("/api/friends", function(req,res){
        res.json(friends);
    });

    app.post("/api/friends", function(req,res){
        // console.log(req.body.answers);
        var user = req.body;
        var index=0;//so the first guy is default match
        var maxDif = 40; //5-1 *10

        for (var i=0; i<user.answers.length;i++){
            user.answers[i] = parseInt(user.answers[i]);
        }


        for (var i=0;i<friends.length;i++){
            var scoreDifference=0;//setting difference low and unatainable so we have something to go off of
            for (var j = 0; j<friends[i].scores.length; j++){
                var dif= Math.abs(user.answers[j]-friends[i].scores[j]);
                scoreDifference+=dif;
            }
            if(scoreDifference<maxDif){
                index=i;
                maxDif=scoreDifference;
            }
        }

        console.log(friends[index]);
        res.json(friends[index]);

    });

}




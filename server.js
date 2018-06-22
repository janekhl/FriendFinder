var express = require("express");
var PORT = process.env.PORT || 8080; // for the heroku app to be able to set the initial port?
var bodyParser = require("body-parser");
var app = express();

app.use(bodyParser.urlencoded({extended: true})); //sets up express to body parse
app.use(bodyParser.json());

//to access the routes
require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);

app.listen(PORT, function(){
    console.log("App listening on PORT: " + PORT)
});
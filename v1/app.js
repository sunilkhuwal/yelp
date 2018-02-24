
//declaration
var express = require("express");
var app = express();
app.set("view engine", "ejs");


//Defining routes
app.get("/", function(req, res){
	//res.send("Created new app");
	res.render("landing");
});


app.get("/campgrounds", function(req, res){
	var campgrounds = [
		{name: "Mount Abu", image: "http://s3.india.com/travel/wp-content/uploads/2014/11/Guru-Shikhar.jpg"},
		{name: "Macleodganj", image: "http://s3.india.com/travel/wp-content/uploads/2014/09/Moutn-Abu1-625x470.jpg"},
		{name: "Manali", image: "http://s3.india.com/travel/wp-content/uploads/2014/09/diwara-temp.jpg"}
	];

	res.render("campgrounds", {campgrounds:campgrounds});
});



//Listening to port
app.listen("3000", function(){
	console.log("V1 Yelpcamp has started!");
});
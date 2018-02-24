
//declaration
var express = require("express");
var app = express();
var bodyparser = require("body-parser");


app.use(bodyparser.urlencoded({extended: true}));
app.set("view engine", "ejs");

var campgrounds = [
	{name: "Mount Abu", image: "http://s3.india.com/travel/wp-content/uploads/2014/11/Guru-Shikhar.jpg"},
	{name: "Macleodganj", image: "http://s3.india.com/travel/wp-content/uploads/2014/09/Moutn-Abu1-625x470.jpg"},
	{name: "Manali", image: "http://s3.india.com/travel/wp-content/uploads/2014/09/diwara-temp.jpg"},
	{name: "Mount Abu", image: "http://s3.india.com/travel/wp-content/uploads/2014/11/Guru-Shikhar.jpg"},
	{name: "Macleodganj", image: "http://s3.india.com/travel/wp-content/uploads/2014/09/Moutn-Abu1-625x470.jpg"},
	{name: "Manali", image: "http://s3.india.com/travel/wp-content/uploads/2014/09/diwara-temp.jpg"}
];

//Defining routes
app.get("/", function(req, res){
	//res.send("Created new app");
	res.render("landing");
});


app.get("/campgrounds", function(req, res){
	
	res.render("campgrounds", {campgrounds:campgrounds});
});

app.post("/campgrounds", function(req, res){
	//res.send("You have reahced to the post route");
	console.log("You have reached the post route");
	

	//get data from form and to campground array
	var name = req.body.name;
	var image = req.body.image;
	var newCampground = {name:name, image: image};
	campgrounds.push(newCampground);
	res.redirect("/campgrounds");
	//redirect back to campgrounds back
});

app.get("/campgrounds/new", function(req, res){
	res.render("new.ejs");
});

//Listening to port
app.listen("3000", function(){
	console.log("V1 Yelpcamp has started!");
});
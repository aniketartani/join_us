var express = require('express');
var app = express();
var mysql=require('mysql');
var bodyParser=require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
//html
app.set("view engine","ejs"); 
app.use(express.static(__dirname+"/public"));//css

// var connection=mysql.createConnection({
// 	host:'localhost',
// 	user:'root',
// 	database: 'join_us'
// });

app.get("/", function(req, res){
	//count the users
	var q="SELECT COUNT(*) AS count FROM users";
	connection.query(q,function(err,results){
		if (err) throw err;
		var count=results[0].count;
		//res.send("We Have "+count+" users in our subscription!");
		res.render("home",{data:count});
	});
	//respond count
});
app.post("/register",function(req,res){
	var person={
		email:req.body.email
	};
connection.query('INSERT INTO users SET ?',person, function(err, result) {
  if(err) throw err;
	res.send("<h1>Thanks for Joining our subscription<h1>");
});

connection.end();
});
app.get("/joke",function(req,res){
	res.send("<h1>this is a joke</h1>");
	console.log("requested the joke");
})
//random no
app.get("/random",function(req,res){
	var x=Math.floor(Math.random()*10);
	res.send("Your lucky no "+x);
	console.log("random no executed");
})
app.listen(3000, function () {
  console.log('App listening on port 3000!');
});

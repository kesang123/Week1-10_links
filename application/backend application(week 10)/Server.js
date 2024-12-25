var express = require("express")
let Teams = require('./BooksSchema')
let mongodbConnected=require('./MongoDBConnect')
const cors = require('cors');
var app =express()
var bodyparser=require("body-parser")
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}))
app.use(cors());
console.log("BOOKS",Teams)
app.get('/',function(req,res){
})

app.get('/allteams',function(req,res){
 Teams.find(function(err, allteam) {
 if (err) {
 console.log(err);
 } else {

 res.json(allteam);
 }
 });
 });
app.get('/getteam/:id',function(req, res) {
 let id = req.params.id;
 Teams.findById(id, function(err, team) {
 res.json(team);
 });
 });
 
app.post('/addteam', function(req,res)
 {
 console.log("Ref",req.body)
 let newteam = new Teams(req.body);
 console.log("newteam->",newteam)
 newbook.save()
 .then(todo => {
 res.status(200).json({'teams': 'team added successfully'});

 })
 .catch(err => {
 res.status(400).send('adding newteam failed');
 });
})
app.post('/updateteam/:id',function(req, res) {
 let id = req.params.id;
 let updatedteam = new Teams(req.body);
 console.log("update id",id,"newteam->",updatedteam)

 Books.findByIdAndUpdate(id,
 {
 team:updatedbook.team,
 GamesPlayed:updatedbook.GamesPlayed,
 Win:updatedbook.Win,
 Draws:updatedbook.Draws,
 Losses:updatedbook.Losses,
 GoalsFor:updatedbook.GoalsFor,
 GoalsAgainst:updatedbook.GoalsAgainst,
 Points:updatedbook.Points,
 Year:updatedteam.Year
 
 }
 ,
 function (err, docs) {
if (err){
console.log(err)
}
else{
 res.status(200).json({'teams': 'team updatedsuccessfully'});
}
 }


)

});
app.post('/deleteteam/:id',function(req, res) {
 let id = req.params.id;

 console.log("deleting")
 Books.findByIdAndDelete(id,function (err, docs) {
 if (err){
 console.log(err)
 }
 else{
 res.status(200).send('Book Deleted');
 }
 }


 )

});
app.listen(5000,function(){
console.log("Server is running on the port 5000")
})
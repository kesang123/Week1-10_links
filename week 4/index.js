const express = require("express");
const fs = require("fs")

const app= express()

/*first exercise*/
app.get('/', function(request, response){
response.send("Welcome to express. My first API")
})



/*second exercise*/
app.get('/about',function(request, response){
response.send("welcome to Trying something New!")

}
)

app.get('/users/:userId',function(request,response){
    response.send(request.params)
})


   /*third exercise*/

app.get('/GetStudents',function(request, response){
    fs.readFile(__dirname + '/student.json', 'utf-8',function(err,data){
        response.send({
         data: JSON.parse(data) ,  
        });
    });
}); 




app.get('/GetStudents/:id',function(request, response){
    fs.readFile(__dirname + '/student.json', 'utf-8',function(err,data){
        const students = JSON.parse(data);
        const selected_student = students['Student' + request.params.id]
         
        response.send({
         data: selected_student,
        });
    });
}); 
app.listen(8000,function(){
    console.log('server is running on port 8000');
});
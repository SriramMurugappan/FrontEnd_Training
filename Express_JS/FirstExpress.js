//import expressjs
var expr=require('express');
const {status} = require('express/lib/response');
//bodyparser
var bparser=require('body-parser');
bparserInit=bparser.urlencoded({extended:false});
//Initialize expressjs environment
var app=expr();
var users = [
{userID:"100",firstName:"Sriram",lastName:"Murugappan"},
{userID:"101",firstName:"SubbaReddy",lastName:"Egavinti"},
{userID:"102",firstName:"Sathwik",lastName:"Mellachervu"}
]; 

function addNewUser(request,response){
    var user_id=request.body.uid;
    var first_Name=request.body.fname;[]
    var last_Name=request.body.lname;
    var rval = users.push({userID:user_id, firstName:first_Name, lastName:last_Name});
    response.send("<b>User added current users: </b>" + {rval});

}
app.post('/addUser',bparserInit,addNewUser)

function retrieveUser(request,response)
{   
    var status=false;    
    var userId=request.query.uid;
    var firstName= request.query.fname;
    for(var user of users){
        if(userId == user.userID && firstName == user.firstName){
            status=true;
            break;
        }
    }
    if(status){
            response.send(user);
        }
        else{
            response.send("<b> No User with ID </b> " + userId);
        }

    
}
app.get('/getUser',retrieveUser);

function home(request,response){
    var resp="<html><body><b> Welcome to our site...<br>";
    resp += "<a href=/welcome>Welcome Page</a></body></html>";
    response.send(resp); //both send/end sends the response
}
app.get('/',home);
var visitorCount=0;
//request represents the HTTP request
//response represent the HTTP response
function welcome(request,response){
    var today = new Date();
        visitorCount++;
    var resp="<html><body><b>Today: " + today;
    resp +="<br><b>Visitor Count</b> :" +visitorCount;
    resp += "</body></html>";  
    response.send(resp);
}

app.get('/welcome',welcome);

function feedback()
{
    console.log("Server started on port 8800..");
    console.log("Open the browser and visit http://localhost:8800/welcome");

}
app.listen(8800, feedback); //(port Number,Name of function)
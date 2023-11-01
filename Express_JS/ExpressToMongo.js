var exp=require('express')
var dot=require('dotenv')
var mon=require('mongoose')
var app=exp();//Intializing express
var bparser= require('body-parser');
bparserinit=bparser.urlencoded({extended:true});

mon.connect("mongodb://127.0.0.1:27017/local?directConnection=true&serverSelectionTimeoutMS=2000t&appName=ExpressToMongo")
    .then(()=>{console.log('Connected to the database....')})
    .catch(()=>{console.log('Unable to connect. Check the URL....')}
)
//Defining the structure of the collection.
const userSchema={userId:String,password : String,emailid : String};

//Link the structure with the name of the actual collection in the database.
//Actual collection name is Users.
//model(<CollectionName>,<schemaName or structureOfTheCollection>)
var UserData = mon.model('Users',userSchema);



function addNewUser(request,response){
    //Prepare the data to be inserted in to the collection
    var udata = new UserData({'userId': request.body.uid,
                            'password': request.body.password,
                            'emailid' : request.body.emailid})

    //Inser the data into the collection. Then check if the data insertion is successful
    //Use save() function for inserting the data.
    udata.save().then((data) => console.log("Inserted Successfully..."));
    response.send("<b>Inserted data successfully")
    .catch((error)=>{
        console.log(error);
        response.send("Unable to insert the data...");
    })
}
app.post('/addUser',bparserinit,addNewUser);

function getAllUsers(request,response)
{   
    
    UserData.find().then((data)=>{console.log(data);response.send(data)})
    .catch((error)=>{console.log(error);
            response.send("Could not retrieve the data");
    })
}
app.get('/allUsers',getAllUsers);

function updateUsers()
{
       
}
app.put("/updateContacts",bparserInit,updateUsers);

app.listen(8001,function(error){
    if(error != undefined){
        console.log(error.message)
    }
    else{
        console.log('connected to port 8001. Waiting for request.');
        console.log('On the browser, visit http://localhost:8001/');
    }
})


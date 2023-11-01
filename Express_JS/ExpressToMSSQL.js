var mssql=require('mysql');
var exp=require('express');
var cors=require('cors');
var bparser= require('body-parser');
bparserInit=bparser.urlencoded({extended:true});
var app=exp();//initializing expressJs
app.use(cors());
app.use(exp.json());
mssqlconnection=mssql.createConnection({
    host: 'localhost', 
    database: 'world',
    user: 'root',
    password: 'root',
    port: 3306
});

function checkConnection(error){
    if(error == undefined){
        console.log("Connected to Database....");
    }
    else{
        console.log("Error code : " + error.errno);
        console.log(error.message);
    }
}

  // ----------------------------- //
 //         Contacts              //
//-------------------------------//

  function feedback(error){
    if(error != undefined){
        console.log(error.errno);
        console.log(error.message);
    }
    else{
        console.log("Server started on port 4000")
        console.log("Open the browser and visit this url http://localhost:4000/getAllContacts");
    }
}
app.listen(4000,feedback);

  function displayAllContactUsers(request,response)
{
    mssqlconnection.connect(checkConnection);
    mssqlconnection.query('Select * from contactusers',processResults);
    response.send(queryresults);// sends it to the client..
}

app.get('/getAllContacts',displayAllContactUsers);

function getContactUserById(request,response){
  //parametrized SQL
  var uid=request.query.uid;
  mssqlconnection.query('select * from contactusers where id=?',//? is a placeholder and gets replaced by the value retrieved
  [uid],processResults);
  response.send(queryresults);
}
app.get('/getById', getContactUserById);

function insertContact(request,response){
  const { id, firstName, lastName, emailid, phoneNo, address} = request.body;
  console.log(id + "\t\t" + firstName + "\t\t" + lastName+ "\t\t" + emailid + "\t\t" + phoneNo + "\t\t" + address);
    // Perform the insertion query
    mssqlconnection.query(
      'INSERT INTO contactusers VALUES (?,?, ?, ?, ?, ?)',
      [id , firstName, lastName, emailid, phoneNo, address],
      function (error, results) {
        if (error) {
          console.error("Error inserting contact:", error);
          response.status(500).json({ error: "Failed to insert contact" });
        } else {
          console.log("Contact inserted successfully");
          response.status(200).json({ message: "Contact inserted successfully" });
        }
      }
    );
  }
app.post('/insertContacts',bparserInit,insertContact);


function updateContact(request, response) {
  var statusMessage="";  
  const { firstName, lastName, emailid, address, phoneNo , id} = request.body;
  mssqlconnection.connect(checkConnection);
  mssqlconnection.query("update contactusers set firstName = ?,lastName=?,emailid=?,phoneNo=?,address=? where id=?",
  [firstName,lastName,emailid,phoneNo,address,id],processResults);
  response.send(JSON.stringify(statusMessage));
}
app.put("/updateContacts",bparserInit,updateContact);


function deleteContactById(request, response) {
    // Get the contact id from the query parameters
    const cid = request.query.id;
 
    // Perform the deletion query
    mssqlconnection.query(
      'DELETE FROM contactusers WHERE id = ?',
      [cid], 
      function (error, results) {
        if (error) {
          console.error("Error deleting contact:", error);
          response.status(500).json({ error: "Failed to delete contact" });
        } 
        else {
          console.log("Contact deleted successfully");
          response.status(200).json({ message: "Contact deleted successfully" });
        }
      }
    );
  }
  app.delete('/deleteContacts', deleteContactById);
//------------------------------------//
 //          CONTACTS                  //
//------------------------------------//
 
// function allcontacts(request,response){
//     mssqlconnection.connect(checkConnection);
//     mssqlconnection.query("select * from contacts",processResult);
//     response.send(JSON.stringify(queryresult));
// }
// app.get("/allcontact",allcontacts);
 
// function AddContact(request,response){
//     var FirstName=request.body.fname;
//     var LastName=request.body.lname;
//     var EmailID=request.body.email;
//     var PhoneNumber=request.body.number;
//     var Address=request.body.address;
   
//     mssqlconnection.connect(checkConnection);
//     mssqlconnection.query("insert into contacts values(?,?,?,?,?)",[FirstName,LastName,EmailID,PhoneNumber,Address],checkinsertstatus);
//     response.send(statusmessage);
// }
// app.post("/addcontact",bparserInit,AddContact);
 
 
// function updatecontact(request,response){
   
//     var FirstName=request.body.fname;
//     var LastName=request.body.lname;
//     var EmailID=request.body.email;
//     var PhoneNumber=request.body.number;
//     var Address=request.body.address;
//     mssqlconnection.connect(checkConnection);
//     mssqlconnection.query("update contacts set LastName=?,EmailID=?,PhoneNumber=?,Address=? where firstname=?",[LastName,EmailID,PhoneNumber,Address,FirstName],processResult);
//     response.send(statusmessage);
// }
// app.post("/updatecontact",bparserInit,updatecontact);
 
// function Deleteuser(request,response){
//     var FirstName=request.body.fname;
   
//     mssqlconnection.connect(checkConnection);
//     mssqlconnection.query("delete from contactus where firstname=?",[FirstName],processResult);
//     response.send(statusmessage);
// }
 
// app.delete("/deletecontact",bparserInit,Deleteuser);  
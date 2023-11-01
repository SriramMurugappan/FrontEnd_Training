
import './App.css';
import { useState } from 'react';

function App(props) {
  // var v=NodeJS.process();
  // console.log(process.argv[0]);
  // console.log(process.argv[1]);
  // console.log(process.argv[2]);
  // console.log("You have passed a total of " + process.argv.length + "Parameters...");
  var userName=prompt("Enter your UserName");
  if(props.name === userName){
    var today= new Date();
    if(today.getHours() >= props.visitingTime)
    {
      return (
        <div className="App">
          <b>Welcome Ms/Mr </b> {props.firstName}&nbsp;
          {props.address}&nbsp; 
          <input type="text" minLength="10" maxLength="20" placeholder='Mention your query'/>
        </div>
      );
    }
    else{
      return(<div><b><center>Visit after {props.visitingTime}AM in your local time.
        Maintenance is happening </center></b></div>);
    }
}
else{
  return(<div className="App"><b>Hi {props.name}. Your account is Blocked. 
          Please Contact the administrator.</b></div>);
}
}

export default App;

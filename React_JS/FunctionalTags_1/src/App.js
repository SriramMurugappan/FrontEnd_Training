import './App.css';
import {useState} from 'react'

function App() {
  const[firstName, setFirstName] = useState("Unknown");
  const[lastName, setLastName] = useState("Unknown");
  const[agree, setAgree] = useState(false);

  const updateFirstName = (event) => {
    setFirstName(event.target.value);
  }
  const updateLastName = (event) => {
    setLastName(event.target.value);
  }

  const enableDisable=(event) => {
    setAgree(event.target.checked);
  }

  const SaveEnable = !(firstName.length >=5 && lastName.length >=5);
     
  return (
    <div>
      <form><center>
        <h1>Enter your Name</h1>
        <label>Enter Your First Name</label><input type="text" 
        value={firstName} onChange={updateFirstName} /><br/>
        <label>Enter Your Last Name</label><input type="text" 
        value={lastName} onChange={updateLastName}/><br/>

        <b>your Name is </b>{firstName}&nbsp;{lastName}<br/><br/>
        <input type="checkbox" value={agree} onChange={enableDisable}/>
        <input type="button" value="Save" disabled={SaveEnable}  />
        </center></form>
    </div>
  );
}

export default App;

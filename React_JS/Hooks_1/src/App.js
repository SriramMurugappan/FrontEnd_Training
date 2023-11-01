import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [visitorCount,setVisitorCount] = useState(1);
  (localStorage.visitorCount != undefined?
     Number(localStorage.visitorCount):1);
  const DisplayStatus = () => { //callback function
    console.log("Visitor count incremented. You are visitor #" + visitorCount);
    //setVisitorCount(visitorCount+1);
  }
  /* This arrow will execute in all 3 phases, viz, Mounting,
    updating and unmounting phases. useEffect hook introduces all
    the 3 phases for this functional component. */

  useEffect(DisplayStatus,[visitorCount]);

  /* React JS implements an observer which observes the change for
    visitor count and if visitor count changes, it automatically call
    that function.*/

  const updateVisitorCount = () => { //callback function
    setVisitorCount(visitorCount+1);
    localStorage.visitorCount=visitorCount;
    console.log("Visitor count updated...");
    

  }
  return (
    <div className="App">
      <form>
        <b>You are a visitor #</b> {visitorCount}<br/>
        <input type="button" onClick={updateVisitorCount}
        value="Update Visitor" /><br/><br/>
      </form>
    </div>
  );
  var v= document.forms[0].visitorCount
}
export default App;

import { Component } from "react";
class userDetails extends Component{

    constructor(){
        super();
        this.state={firstName: 'Unknown', lastName: 'Unknown'};
        this.updateFirstName=this.updateFirstName.bind(this);
        this.updateLastName=this.updateLastName.bind(this);
    }
    updateFirstName(event){
        console.log(event.target.value);
        //Store the value of firstName Textbox into 
        //firstName field in the this.state.
        this.setState({firstName: event.target.value});
    }
    updateLastName(event){
        console.log(event.target.value);
        //Store the value of LastName Textbox into 
        //lastName field in the this.state.
        this.setState({lastName: event.target.value});
    }
  //This class must implement a function called render to display html content.

   render(){
    return(
        <div className="formclass"><center>
          <form>
     
         <label>firstname</label><input type="text" name="firstName" value={this.state.firstName} onChange={this.updateFirstName}/><br/>
        
          <label>lastname</label><input type="text" name="lastName" onChange={this.updateLastName}/><br/>

           <input type="submit" value="Save" />
           <b>Your Full name, Mr/Ms</b>&nbsp;&nbsp;
           <label>{this.state.firstName}&nbsp;&nbsp;
            {this.state.lastName}</label>
          </form>
          </center>
        </div>

 
   );

  }

}
export default userDetails;

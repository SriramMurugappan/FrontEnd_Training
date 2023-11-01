import { Component } from "react"
class Details extends Component{
    constructor(){
        super();
        this.state={ProjectName: 'Unknown', ManagerName: 'Unknown', StartDate: 'Unknown'};
        this.updateProjectName=this.updateProjectName.bind(this);
        this.updateManagerName=this.updateManagerName.bind(this);
        this.updateStartDate=this.updateStartDate.bind(this);
    }
    updateProjectName(event){
      console.log(event.target.value);
      //Store the value of firstName Textbox into 
      //firstName field in the this.state.
      this.setState({ProjectName: event.target.value});
    }
    updateManagerName(event){
      console.log(event.target.value);
      this.setState({ManagerName: event.target.value});
    }
    updateStartDate(event){
      console.log(event.target.value);
      this.setState({ManagerName: event.target.value});
    }
    render(){
        return(
            <div className="formclass"><center>
              <form>
         
             <label>Project Name</label><input type="text" name="ProjectName" onChange={this.updateProjectName}/><br/>
            
              <label>Manager Name</label><input type="text" name="ManagerName" onChange={this.updateManagerName}/><br/>
              
              <label>Start Date</label><input type="Date" name="StartDate" onChange={this.updateStartDate}/><br/>
               <input type="submit" value="Save" />

               <b>Your Project Name</b>&nbsp;&nbsp;
               <label>{this.state.ProjectName}&nbsp;&nbsp;</label>
               <b>Your Manager Name</b>&nbsp;&nbsp;
                <label>{this.state.ManagerName}&nbsp;&nbsp;</label>
                <b>Start Date</b><label>{this.state.StartDate}</label>
              </form>
              </center>
            </div>
    
     
       );
    
      }
}
export default Details;
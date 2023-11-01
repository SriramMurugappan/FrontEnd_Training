import {Component} from 'react';
import User from './User'
class LCDetails extends Component{
    userArray=[];
    cnt=0;
    constructor(){
        super();
        this.state={firstName: 'Unknown', Address: 'Unknown', updateCount: 0};
        this.updateFirstName=this.updateFirstName.bind(this);
        this.updateAddress=this.updateAddress.bind(this);
        this.confirmReset=this.confirmReset.bind(this);
        this.addUser=this.addUser.bind(this);
        this.deleteUser=this.deleteUser.bind(this);
    }
    /* This function gets executed tag is getting load in   
    Mounting phase.Use this function to initialize the state 
    and perform some initial task like DB Connection or authentication  */
    componentDidMount(){
        this.setState({firstName:'Unknown'});
        this.setState({Address: "Unknown"});
        console.log("State Initialized...");
    }
    componentDidUpdate(){
        var today=new Date();
        // this.setState({updateCount: this.state.updateCount + 1});
        console.log('Got updated on ' + 
        today.getHours() + ":" + today.getMinutes() + " for " +
        this.state.updateCount + "times");
    }

    componentWillUnmount(){
        var today=new Date();
        console.log("Tag unmounted on" + today.getHours() + ":" + today.getMinutes());
    }
    updateFirstName(event){
        this.setState({firstName: event.target.value});
        this.setState({updateCount: this.state.updateCount + 1});
        console.log(this.state.updateCount);
    }

    updateAddress(event){
        this.setState({Address: event.target.value});
        this.setState({updateCount: this.state.updateCount + 1});
    }
    confirmReset(){
        var v = window.confirm("Do you wish to reset the form? Yes/No");
        return v;
    }
    addUser(event){
        event.preventDefault();
        var u=new User(this.state.firstName,this.state.Address);
        this.userArray.push(u);
        this.setState({firstName:"",Address:"",latestUserIndex: this.userArray.length-1});
        console.log(this.userArray);
    }
    deleteUser(){
        if (this.userArray.length > 0) {
            this.userArray.pop();
            this.setState({
              latestUserIndex: this.userArray.length - 1,
            });
    }
    console.log(this.userArray);
}
    render(){
        return(<div><center>
            <form onReset={this.confirmReset} onSubmit={this.addUser}>
                <label>First Name</label>&nbsp;&nbsp;
                <input type="text" value={this.state.firstName}
                onChange={this.updateFirstName}/> <br/>
                <label>Address</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="text" value={this.state.Address}
                onChange={this.updateAddress}/> <br/><br />
                <div>
                <input type="submit" value="Add data" />&nbsp;&nbsp;
                    {this.userArray.length > 0 && (
                    <button onClick={this.deleteUser}>Delete</button>
                    )}
                </div>
                <input type="reset" value="Reset" />&nbsp;&nbsp;                
            
            </form></center>
            <center>
            <table border="1">
            <thead>
                <tr>
                <th>First Name</th>
                <th>Address</th>
                <th>Delete</th>
                </tr>
                </thead>
                <tbody>
              {this.userArray.map((usr, index) => (
                <tr key={index}>
                <td>{usr.firstName}</td>
                <td>{usr.address}</td>
                <td>
                    {index === this.state.latestUserIndex && (
                <button onClick={this.deleteUser}>Delete</button>
                    )}
</td>
</tr>
              ))}
</tbody>
</table></center><br/>
            </div>)
    }
}
export default LCDetails;
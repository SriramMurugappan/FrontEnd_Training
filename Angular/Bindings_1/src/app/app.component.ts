import { Component } from '@angular/core';
import { UserData } from './UserData';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  udata : UserData = new UserData;
  usersList : UserData[]=[]; //Array of UserData objects.
  title = 'bindings';
  themeName : string = 'ocean';
  size : number = 100;
  applyColor : string  = 'Green';
  firstName : string = "Sriram";
  lastName : string = "Murugappan";
  enableDisable : boolean = true;
  company : string = "Gavs";
  location : string = "Chennai";
  stateName : string = "TN";
  SaveData(event : Event){
    this.usersList.push(this.udata);
    console.log("Added data to the array");
    console.log(this.udata);
    this.udata=new UserData();
  }
  checkData(){
    // console.log(event.target);
    console.log(this.udata.firstName.length);
  }
  sendData(){
    console.log("Sending data to Express backend...");
    //Code for Final validation
    //Code for communicating with the backend
  }
}

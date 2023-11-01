import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BackendAccessService } from '.././backend-access.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title = 'angularexpress';
  userList : any =[];
  data : any;
  expresponse : string = " ";
  constructor(private http : HttpClient, private baccess : BackendAccessService ){
  }
  getAllUsers(){
    this.userList = this.baccess.getAllUsers(); // userlist is the model and the service layer will give the retrieved values from backend to controller 
  }
  
  addUser(udata : any){
    this.expresponse = this.baccess.addUser(udata);// udata is the data captured in the form
    
  }


}

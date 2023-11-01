import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BackendAccessService } from '.././backend-access.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent {
  title='angularexpress'; 
  contactList : any=[];
  data : any;
  expresponse : string = "";
  constructor(private http : HttpClient, private baccess : BackendAccessService){

  }
  getAllContacts(){
    this.contactList = this.baccess.getAllContacts();
  }
  addContact(cdata : any){
    this.expresponse = this.baccess.addContact(cdata);
  }
  updateContact(cdata : any) {
    this.baccess.updateContact(cdata);
  }
  deleteContact(cdata : any){
    this.baccess.deleteContact(cdata);
  }
}

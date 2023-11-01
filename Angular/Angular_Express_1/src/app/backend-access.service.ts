import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BackendAccessService {
  userList : any =[];
  data : any;
  expresponse : string = " ";
  contactList : any = [];
  constructor(private http : HttpClient){
  }
  //string is the return type of getAll
  getAllUsers() {
    this.http.get('http://localhost:9901/getAll').subscribe
    ((response) => {
      this.userList = response;
      console.log(this.userList);
  });
    return this.userList;
  }

  addUser(udata : any) : any{
    // console.log(udata);
    // console.log(udata.value); 
    // this.userList.push(udata.value);
    this.http.post('http://localhost:9901/insert',udata.value).
    subscribe((response)=>{
      this.expresponse=response.toString();
    })
    return this.expresponse;
  }

  getAllContacts() {
    this.http.get('http://localhost:4000/getAllContacts').subscribe
    ((response) => {
      this.contactList = response;
      console.log(this.contactList);
  });
    return this.contactList;
  }
    addContact(cdata : any){
      this.http.post('http://localhost:4000/insertContacts',cdata.value).
      subscribe((response)=>{
      this.expresponse=response.toString();
    })
    return this.expresponse;
    }
    updateContact(cdata:any){
      this.http.put('http://localhost:4000/updateContacts',cdata.value).
      subscribe((response)=>
      {
        this.contactList=response;
        console.log(this.contactList);
      });
    }
    deleteContact(cdata:any){
      this.http.delete('http://localhost:4000/deleteContact',cdata.value).
      subscribe((response)=>
      {
        this.contactList=response;
        console.log(this.contactList);
      });
    }
}

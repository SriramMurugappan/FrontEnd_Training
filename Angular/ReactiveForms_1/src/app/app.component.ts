import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms'; 
import { Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reactforms';
  userList : any = [];
	addUser(){
    if(this.userForm.valid){
	   console.log(this.userForm.value);
	   this.userList.push(this.userForm.value);
    }
    else{
      console.log("Validation error");
    }
	}
  deleteUser(index : any){
    this.userList.splice(index,1);
  }
	userForm : any = new FormGroup({
      //formControl represents input items in the form.
	    firstName : new FormControl('unknown',[Validators.minLength(5),Validators.maxLength(50),Validators.required]),
	    lastName : new FormControl('unknown',[Validators.minLength(5),Validators.maxLength(50),Validators.required]),
	    joinDate : new FormControl('2020-01-03',[Validators.required]),
	    salary : new FormControl(30000,[Validators.min(30000),Validators.max(1000000),Validators.required]),
	},  //Min and Max are used in numbers && minLength and maxLength are used in strings.
	{
	    updateOn: 'change'
	}

);
}

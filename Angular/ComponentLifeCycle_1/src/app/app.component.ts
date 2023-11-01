import { Component } from '@angular/core';
import { OnInit,OnDestroy } from '@angular/core';
import { DoCheck,AfterContentChecked } from '@angular/core';
import { AfterContentInit } from '@angular/core';
import { AfterViewChecked } from '@angular/core';
import { AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy, DoCheck , AfterContentChecked,
AfterContentInit, AfterViewChecked, AfterViewInit
{
  firstName : string = "Unknown";
  lastName : string = "Unknown";
  ngAfterViewInit(): void { // Step 5
    console.log('View Initialization completed');
  }
  ngAfterViewChecked(): void { // Step 6
    console.log('View Checking completed ');
  }
  ngAfterContentInit(): void { // Step 3
    console.log('Content Initialization completed.');
  }
  ngAfterContentChecked(): void { // Step 4
    console.log('Content verified/checked');
  }
  ngDoCheck(): void { // Step 2
    console.log('Overall verification/validation started.');
  }
  
  ngOnDestroy(): void {
    /*write the code for connecting to the backend to save the data
    before the component gets destroyed.*/
    console.log("Component destroyed at" + new Date());
  }
  ngOnInit(): void { //phase 1 - Initialization phase 
    //write the code for connecting to the backend and fetch data
    var today =new Date();
    console.log("component getting initialized at " + today);
  }
  title = 'componentlifecycle';
  
}

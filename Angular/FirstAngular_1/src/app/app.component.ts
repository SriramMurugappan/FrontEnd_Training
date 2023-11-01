import { style } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<div style="color: burlywood"><b>Welcome to Angular</b><u>Introduction to Angular</u></div>',
  /* styleUrls: ['./app.component.css'],*/
  styles: ['b{color:magenta}','div{color: blue}']
})
export class AppComponent {
  title = 'firstangular';
  name : string = 'Sriram Murugappan M';
}

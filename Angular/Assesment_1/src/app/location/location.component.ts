import { Component } from '@angular/core';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent {
  selectedState: string = '';
  selectedCity: string = '';
  states: string[] = ['Tamilnadu', 'Andhra', 'Kerala', 'Karnataka'];
  cities: Record<string, string[]> = {
    'Tamilnadu': ['Chennai', 'karaikudi', 'Coimbatore' ],
    'Andhra': ['Hyderabad', 'Vijayawada', 'Warangal'],
    'Kerala': ['Ernakulam', 'Cochin', 'Thiruvananthapuram'],
    'Karnataka': ['Banglore', 'Hampi', 'Manglore'],
  };
}

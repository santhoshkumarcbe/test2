import { Component } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.css']
})

export class ParentComponentComponent {

  arr: number[] = [1,2,3];

  search = '';  
  items = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' }
  ];

  get filteredItems() {
    return this.items.filter(item =>
       item.name.toLowerCase().includes(this.search.toLowerCase()));
  }
  

  parentData = "Hai"
  isHighlight = false;
  numbers = [1,2,3,4,5];

  bookSlot = true;

  names = ["hari","varun","sakthi","ben","max"];

  

receivedData: string = '';

  receiveDataFromChild(data: string){
    this.bookSlot = false; 
    this.receivedData = data;
    this.isHighlight = true;
   
  }

  styles = {
    'font-size' : this.isHighlight ? '50px' : '30px',
    'color':this.isHighlight? 'green': 'red'
  }

  currentItem = {
    name: 'santhosh',
  };

  setUppercaseName(value: string) {
    this.currentItem.name = value.toUpperCase();
    console.log(this.currentItem.name);
  }


}

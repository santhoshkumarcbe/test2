import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent {
  @Input() dataFromParent!: string ;

  @Output() dataToParent = new EventEmitter<string>();

  sendDataToParent(){
    const data = "data from child";
    this.dataToParent.emit(data);
  }
  
}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input('parent-text') parentInputText : string = "";
  @Output('child-text') childText : EventEmitter<any> = new EventEmitter<any>();

  constructor() { }


  ngOnInit(): void {
  }

  detectChange(event: any) {    
    this.childText.emit(event.target.value);
  }

}

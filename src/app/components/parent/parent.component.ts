import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  parentText : string = ""
  childInputText : string = ""
  constructor() { }

  ngOnInit(): void {
  }

  displayText(event : any) {    
    this.parentText = event.target.value;
    console.log("Parent text" + event.target.value);
  }

  saveText(text : any) {
    this.childInputText = text;
  }

}

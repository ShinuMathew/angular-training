import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  public text : string = "Enter your name";
  public type : string = "text";
  public paraContent : string = "";

  displayText() {
    console.log("Welcome to Angular")
  }

  typeContent(event:any) {

    this.paraContent = event.target.value;
  }

}

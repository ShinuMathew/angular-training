import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  public email : string = '';
  public textArea : string = '';
  public password : string = '';
  public consent : boolean = false;
  public shouldDisplay : boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  setEmail(event: any): void {
    this.email = event.target.value;
  }

  setPassword(event: any): void {
    this.password = event.target.value;
  }

  setConsent(event: any): void {
    console.log(event.target.value)
    this.consent = event.target.value;
  }

  setTextArea(event: any): void {
    console.log(event.target.value)
    this.textArea = event.target.value;
  }

  displayData() {
    this.shouldDisplay = !this.shouldDisplay
  }

}
